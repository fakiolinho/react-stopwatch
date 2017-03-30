import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Table from 'components/Table';
import LapsList from './';

describe('test LapsList component', () => {
  it('should render', () => {
    const props = {
      laps: [],
      isLoading: false,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<LapsList {...props} />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should render right message when no laps exist & isLoading is false', () => {
    const props = {
      laps: [],
      isLoading: false,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<LapsList {...props} />);

    expect(enzymeWrapper.find('p').text()).toBe('No laps saved yet');
  });

  it('should not render laps table when no laps exist & isLoading is false', () => {
    const props = {
      laps: [],
      isLoading: false,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<LapsList {...props} />);

    expect(enzymeWrapper.find('table').length).toBe(0);
  });

  it('should render right message when no laps exist & isLoading is true', () => {
    const props = {
      laps: [],
      isLoading: true,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = shallow(<LapsList {...props} />);

    expect(enzymeWrapper.find('p').text()).toBe('...loading');
  });

  it('should not render laps table when no laps exist & isLoading is true', () => {
    const props = {
      laps: [],
      isLoading: true,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<LapsList {...props} />);

    expect(enzymeWrapper.find('table').length).toBe(0);
  });

  it('should render laps table when laps exist', () => {
    const props = {
      laps: [1, 2],
      isLoading: true,
      deleteLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<LapsList {...props} />);

    expect(enzymeWrapper.contains(<Table headings={['#', 'Duration']} items={props.laps} />)).toBeTruthy();
  });
});
