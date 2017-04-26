import React from 'react';
import PropTypes from 'prop-types';

import BEM from 'bem-cn';

const b = BEM('card');

const CardBody = ({ children, className, ...restProps }) => (
  <div className={b('body').mix(className)} {...restProps}>
    {children}
  </div>
);

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardBody.defaultProps = {
  children: null,
  className: '',
};

export default CardBody;
