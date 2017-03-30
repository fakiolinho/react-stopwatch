import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from './';

describe('test Footer component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Footer />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain footer node', () => {
    const enzymeWrapper = shallow(<Footer />);

    expect(enzymeWrapper.find('footer').length).toBe(1);
  });
});
