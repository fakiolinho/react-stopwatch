import * as React from 'react';
import { shallow } from 'enzyme';

import CardHeader from './';

describe('test CardHeader component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<CardHeader />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<CardHeader>Hello World</CardHeader>);

    expect(enzymeWrapper.find('div').text()).toBe('Hello World');
  });

  it('should render title', () => {
    const props = {
      title: 'Some title',
    };
    const enzymeWrapper = shallow(<CardHeader {...props} />);

    expect(enzymeWrapper.find('div').text()).toBe('Some title');
  });

  it('should render title ', () => {
    const props = {
      title: 'Some title',
    };
    const enzymeWrapper = shallow(<CardHeader {...props}>Some content</CardHeader>);

    expect(enzymeWrapper.find('div').text()).toBe('Some title');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<CardHeader {...props} />);

    expect(enzymeWrapper.find('div').hasClass('card__header')).toBeTruthy();
    expect(enzymeWrapper.find('div').hasClass('random')).toBeTruthy();
  });
});
