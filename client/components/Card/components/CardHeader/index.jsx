import React from 'react';
import PropTypes from 'prop-types';
import BEM from 'bem-cn';

const b = BEM('card');

const CardHeader = ({ children, className, title, ...restProps }) => (
  <div className={b('header').mix(className)} {...restProps}>
    {title ? <h2 className={b('title')}>{title}</h2> : children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

CardHeader.defaultProps = {
  children: null,
  className: '',
  title: '',
};

export default CardHeader;
