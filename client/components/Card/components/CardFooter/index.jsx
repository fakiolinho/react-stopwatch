import React from 'react';
import PropTypes from 'prop-types';
import BEM from 'bem-cn';

const CardFooter = ({ children, className, ...restProps }) => {
  const b = BEM('card');

  return (
    <div className={b('footer').mix(className)} {...restProps}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  children: null,
  className: '',
};

export default CardFooter;
