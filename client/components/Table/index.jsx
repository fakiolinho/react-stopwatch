import React, { PropTypes } from 'react';
import BEM from 'bem-cn';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

import './style.scss';

const b = BEM('table');

const Table = ({ children, className, headings, items, ...restProps }) => (
  <table className={b.mix(className)} {...restProps}>
    <TableHeader headings={headings} />
    <TableBody items={items} />
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headings: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

Table.defaultProps = {
  children: null,
  className: '',
  headings: [],
  items: [],
};

export default Table;
