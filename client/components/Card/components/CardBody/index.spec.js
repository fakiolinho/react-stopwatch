import * as React from 'react';
import { shallow } from 'enzyme';

import CardBody from './';

describe('test CardBody component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<CardBody />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<CardBody>Hello World</CardBody>);

    expect(enzymeWrapper.find('div').text()).toBe('Hello World');
  });

  it('should render classes', () => {
    const props = {
      className: 'random',
    };
    const enzymeWrapper = shallow(<CardBody {...props} />);

    expect(enzymeWrapper.find('div').hasClass('card__body')).toBeTruthy();
    expect(enzymeWrapper.find('div').hasClass('random')).toBeTruthy();
  });
});
