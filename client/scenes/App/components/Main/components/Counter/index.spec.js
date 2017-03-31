import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from 'components/Button';
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

  it('should test calculateTime method', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);

    expect(enzymeWrapper.instance().calculateTime(0)).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '00',
      milliseconds: '00',
    });
    expect(enzymeWrapper.instance().calculateTime(100)).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '00',
      milliseconds: '10',
    });
    expect(enzymeWrapper.instance().calculateTime(111)).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '00',
      milliseconds: '11',
    });
    expect(enzymeWrapper.instance().calculateTime(1870)).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '01',
      milliseconds: '87',
    });
    expect(enzymeWrapper.instance().calculateTime(61760)).toEqual({
      hours: '00',
      minutes: '01',
      seconds: '01',
      milliseconds: '76',
    });
  });

  it('should test formatDigits method', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);

    expect(enzymeWrapper.instance().formatDigits(1)).toBe('01');
    expect(enzymeWrapper.instance().formatDigits('01')).toBe('01');
  });

  it('should test after handleStart method gets triggered', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);

    expect(enzymeWrapper.state('isStarted')).toBeFalsy();

    enzymeWrapper.find(Button).simulate('click');
    expect(enzymeWrapper.state('isStarted')).toBeTruthy();
    expect(enzymeWrapper.find(Button).length).toBe(3);
  });

  it('should test after handleSaveLap method gets triggered', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);
    enzymeWrapper.instance().handleSaveLap();

    expect(enzymeWrapper.instance().lap).toBe(0);
    expect(props.saveLaps).toHaveBeenCalledTimes(1);
  });

  it('should test after counterStart method gets triggered', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);
    enzymeWrapper.setState({ counter: 500 });
    enzymeWrapper.instance().lap = 500;
    enzymeWrapper.instance().counterStart();

    expect(enzymeWrapper.state('counter')).toBe(510);
    expect(enzymeWrapper.instance().lap).toBe(510);
  });

  it('should test after handleStop method gets triggered', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);
    enzymeWrapper.instance().handleStop();

    expect(enzymeWrapper.state('counter')).toBeFalsy();
    expect(enzymeWrapper.state('isStarted')).toBeFalsy();
    expect(enzymeWrapper.state('isPaused')).toBeFalsy();
    expect(enzymeWrapper.instance().lap).toBe(0);
    expect(enzymeWrapper.find(Button).text()).toBe('Start');
  });

  it('should test after handlePause method gets triggered', () => {
    const props = {
      saveLaps: jest.fn(),
    };
    const enzymeWrapper = mount(<Counter {...props} />);
    enzymeWrapper.instance().handlePause();

    expect(enzymeWrapper.state('isPaused')).toBeTruthy();
  });
});
