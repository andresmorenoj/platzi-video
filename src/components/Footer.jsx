import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Footer.scss';

export const Footer = ({ terms, declaration, help }) => (
  <footer className='footer'>
    <a href='/'>{terms}</a>
    <a href='/'>{declaration}</a>
    <a href='/'>{help}</a>
  </footer>
);

Footer.propTypes = {
  terms: PropTypes.string,
  declaration: PropTypes.string,
  help: PropTypes.string,
};

Footer.defaultProps = {
  terms: 'Terminos de uso',
  declaration: 'Declaración de pravacidad',
  help: 'Centro de ayuda',
};
