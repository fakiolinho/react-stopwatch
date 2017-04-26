import React from 'react';
import PropTypes from 'prop-types';

import BEM from 'bem-cn';
import './style.scss';

const b = BEM('button');

const Button = ({ children, className, ...restProps }) => (
  <button type="button" className={b.mix(className)} {...restProps}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
};

export default Button;
