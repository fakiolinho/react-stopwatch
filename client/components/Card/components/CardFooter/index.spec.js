import * as React from 'react';
import { shallow } from 'enzyme';

import CardFooter from './';

describe('test CardFooter component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<CardFooter />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<CardFooter>Hello World</CardFooter>);

    expect(enzymeWrapper.find('div').text()).toBe('Hello World');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<CardFooter {...props} />);

    expect(enzymeWrapper.find('div').hasClass('card__footer')).toBeTruthy();
    expect(enzymeWrapper.find('div').hasClass('random')).toBeTruthy();
  });
});
