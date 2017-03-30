import React, { PropTypes } from 'react';
import BEM from 'bem-cn';

import './style.scss';

const b = BEM('link');

const Link = ({ children, className, href, ...restProps }) => (
  <a
    href={href}
    className={b.mix(className)}
    {...restProps}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  className: '',
  href: '',
};

export default Link;
