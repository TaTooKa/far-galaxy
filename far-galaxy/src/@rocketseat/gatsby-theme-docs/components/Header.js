import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStaticQuery, graphql } from 'gatsby';

// Path to the logo file on your project
import fargalaxylogo from './assets/far-galaxy-logo.png';

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 40px;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 18px;

    @media (max-width: 359px) {
      font-size: 14px;
    }
    span.white {
      color: #fff;
    }
    span.blueish {
      color: #22e3ffff;
    }
    span.reddish {
      color: #e62a00ff;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 16px;
    color: #fff;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

export default function Header({ handleMenuOpen }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `,
  );

  const { siteTitle } = site.siteMetadata;

  return (
    <Container>
      <button aria-label="Open sidebar" type="button" onClick={handleMenuOpen}>
        <GiHamburgerMenu size={23} aria-hidden="true" />
      </button>
      <h2>
        <img src={fargalaxylogo}/>
      </h2>
    </Container>
  );
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};
