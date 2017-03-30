import * as React from 'react';
import { shallow } from 'enzyme';

import Link from './';

describe('test Link component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Link />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<Link>Hello World</Link>);

    expect(enzymeWrapper.find('a').text()).toBe('Hello World');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<Link {...props} />);

    expect(enzymeWrapper.find('a').hasClass('link')).toBeTruthy();
    expect(enzymeWrapper.find('a').hasClass('random')).toBeTruthy();
  });

  it('should render href attribute', () => {
    const props = {
      href: 'random',
    };
    const enzymeWrapper = shallow(<Link {...props} />);

    expect(enzymeWrapper.find('a[href="random"]').length).toBe(1);
  });
});
