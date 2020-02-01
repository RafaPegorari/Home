import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Routes from './Routes';

describe('Routes', () => {
  it('should App was created', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should App render a Routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Routes)).toHaveLength(1);
  });

  it('should check if component crash called componentDidCath', () => {
    const error = new Error('error');
    const spyConsole = jest.spyOn(global.console, 'error').mockImplementation();

    const wrapper = shallow(<App />);
    const componentDidCatch = jest.spyOn(App.prototype, 'componentDidCatch');
    wrapper.simulateError(error);

    expect(spyConsole).toHaveBeenCalled();
    expect(componentDidCatch).toHaveBeenCalled();
  });
});
