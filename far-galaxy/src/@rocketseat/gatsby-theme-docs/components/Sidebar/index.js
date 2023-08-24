import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles';
import { isExternalUrl } from '@rocketseat/gatsby-theme-docs/src/util/url';
import ExternalLink from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/ExternalLink';
import InternalLink from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/InternalLink';
import Logo from '../Logo';

import ThemeContext from '/src/context/ThemeContext'

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath} aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => (
                <Item key={item.link}>{renderLink(item.link, item.label)}</Item>
              ));

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
      {/* <ThemeContext.Consumer>
        {theme => (

              <button className="dark-switcher" onClick={theme.toggleDark}>
                {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
              </button>
          )}
        </ThemeContext.Consumer> */}
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
