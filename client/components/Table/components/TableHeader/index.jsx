import React, { PropTypes } from 'react';
import BEM from 'bem-cn';

const b = BEM('table');

const TableHeader = ({ children, className, headings, ...restProps }) => (
  <thead className={b('head').mix(className)} {...restProps}>
    <tr>
      {headings.map((item, index) => <th key={index}>{item}</th>)}
    </tr>
  </thead>
);

TableHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headings: PropTypes.arrayOf(PropTypes.string),
};

TableHeader.defaultProps = {
  children: null,
  className: '',
  headings: [],
};

export default TableHeader;
