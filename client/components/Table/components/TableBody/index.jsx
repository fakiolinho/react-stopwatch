import React, { PropTypes } from 'react';
import BEM from 'bem-cn';

const b = BEM('table');

const TableBody = ({ children, className, items, ...restProps }) => (
  <tbody className={b('body').mix(className)} {...restProps}>
    {items.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}.</td>
        <td>{item}</td>
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

TableBody.defaultProps = {
  children: null,
  className: '',
  items: [],
};

export default TableBody;
