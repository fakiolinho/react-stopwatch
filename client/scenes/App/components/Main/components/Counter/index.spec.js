import * as React from 'react';
import { shallow } from 'enzyme';

import Counter from './';

describe('test Counter component', () => {
  it('should render', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<Counter {...props} />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render 4 counter__digit nodes', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<Counter {...props} />);

    expect(enzymeWrapper.find('.counter__digit').length).toBe(4);
  });
});
