import React, { PropTypes } from 'react';
import BEM from 'bem-cn';

import './style.scss';

const b = BEM('card');

const Card = ({ children, className, ...restProps }) => (
  <div className={b.mix(className)} {...restProps}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};

export default Card;

export CardHeader from './components/CardHeader';
export CardBody from './components/CardBody';
export CardFooter from './components/CardFooter';
