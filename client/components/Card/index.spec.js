import * as React from 'react';
import { shallow } from 'enzyme';

import Card from './';

describe('test Card component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Card />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<Card>Hello World</Card>);

    expect(enzymeWrapper.find('div').text()).toBe('Hello World');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<Card {...props} />);

    expect(enzymeWrapper.find('div').hasClass('card')).toBeTruthy();
    expect(enzymeWrapper.find('div').hasClass('random')).toBeTruthy();
  });
});
