import * as React from 'react';
import { shallow } from 'enzyme';

import Button from './';

describe('test Button component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Button />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<Button>Hello World</Button>);

    expect(enzymeWrapper.find('button').text()).toBe('Hello World');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<Button {...props} />);

    expect(enzymeWrapper.find('button').hasClass('button')).toBeTruthy();
    expect(enzymeWrapper.find('button').hasClass('random')).toBeTruthy();
  });
});
