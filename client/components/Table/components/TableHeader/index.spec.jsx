import * as React from 'react';
import { shallow } from 'enzyme';

import TableHeader from './';

describe('test TableHeader component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<TableHeader />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<TableHeader {...props} />);

    expect(enzymeWrapper.find('thead').hasClass('table__head')).toBeTruthy();
    expect(enzymeWrapper.find('thead').hasClass('random')).toBeTruthy();
  });

  it('should render as many th nodes as the headings we pass', () => {
    const props = {
      headings: ['#', 'duration'],
    };
    const enzymeWrapper = shallow(<TableHeader {...props} />);

    expect(enzymeWrapper.find('th').length).toBe(2);
  });
});
