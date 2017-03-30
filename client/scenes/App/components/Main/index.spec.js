import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Main } from './';

describe('test Main component', () => {
  it('should render', () => {
    const props = {
      laps: [],
      isLoading: false,
      getLaps: jest.fn(),
      saveLaps: jest.fn(),
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain main node', () => {
    const props = {
      laps: [],
      isLoading: false,
      getLaps: jest.fn(),
      saveLaps: jest.fn(),
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.find('main').length).toBe(1);
  });

  it('should trigger getLaps once in componentDidMount', () => {
    const props = {
      laps: [],
      isLoading: false,
      getLaps: jest.fn(),
      saveLaps: jest.fn(),
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Main {...props} />);

    expect(props.getLaps).toHaveBeenCalledTimes(1);
  });
});
