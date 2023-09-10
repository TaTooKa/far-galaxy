/* @jsx jsx */
import { useState, useRef, Fragment } from 'react';
import { jsx, css } from '@emotion/react';
import PropTypes from 'prop-types';

import TableOfContents from '@rocketseat/gatsby-theme-docs/src/components/Docs/TOC';
import Sidebar from '@rocketseat/gatsby-theme-docs/src/components/Sidebar';
import Header from '@rocketseat/gatsby-theme-docs/src/components/Header';
import Overlay from '@rocketseat/gatsby-theme-docs/src/components/Overlay';
import { Container, Main, Children } from './styles';

import Scroll from '/src/@rocketseat/gatsby-theme-docs/components/scroll'
import MenuButton from '/src/@rocketseat/gatsby-theme-docs/components/menubutton'

import ThemeContext from '/src/context/ThemeContext'

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      {/* <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? 'dark' : 'light'}> */}
        <Scroll showBelow={250} />
        <MenuButton showBelow={50} handleMenuOpen={handleMenuOpen}/>
        <div className='dark'>
            <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
            <Container>
                <Sidebar isMenuOpen={isMenuOpen} />
                <Main>
                <Header handleMenuOpen={handleMenuOpen} />
                {title && (
                    <h1
                    css={css`
                        display: none;

                        @media (max-width: 1200px) {
                        display: block;
                        }
                    `}
                    >
                    {title}
                    </h1>
                )}
                <Children ref={contentRef}>
                    {title && (
                    <h1
                        css={css`
                        @media (max-width: 1200px) {
                            display: none;
                        }
                        `}
                    >
                        {title}
                    </h1>
                    )}
                    {children}
                </Children>
                <TableOfContents
                    headings={headings}
                    disableTOC={disableTOC}
                    contentRef={contentRef}
                />
                </Main>
            </Container>
          </div>
        {/* )}
        </ThemeContext.Consumer> */}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: '',
  headings: null,
};