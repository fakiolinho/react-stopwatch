import * as React from 'react';
import { shallow } from 'enzyme';

import TableBody from './';

describe('test TableBody component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<TableBody />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<TableBody {...props} />);

    expect(enzymeWrapper.find('tbody').hasClass('table__body')).toBeTruthy();
    expect(enzymeWrapper.find('tbody').hasClass('random')).toBeTruthy();
  });

  it('should render as many th nodes as the items we pass', () => {
    const props = {
      items: [1, 2],
    };
    const enzymeWrapper = shallow(<TableBody {...props} />);

    expect(enzymeWrapper.find('tr').length).toBe(2);
  });
});
