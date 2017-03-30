import * as React from 'react';
import { shallow } from 'enzyme';

import Table from './';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

describe('test Table component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Table />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<Table {...props} />);

    expect(enzymeWrapper.find('table').hasClass('table')).toBeTruthy();
    expect(enzymeWrapper.find('table').hasClass('random')).toBeTruthy();
  });

  it('should contain TableHeader, TableBody', () => {
    const enzymeWrapper = shallow(<Table />);

    expect(enzymeWrapper.containsAllMatchingElements([
      <TableHeader />,
      <TableBody />,
    ])).toBeTruthy();
  });
});
