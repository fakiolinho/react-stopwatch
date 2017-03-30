import * as React from 'react';
import { shallow } from 'enzyme';

/* eslint-disable import/no-named-as-default */
import App from './';
import Main from './components/Main';
import Footer from './components/Footer';

describe('test App component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain Main, Footer', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper.containsAllMatchingElements([
      <Main />,
      <Footer />,
    ])).toBeTruthy();
  });
});
