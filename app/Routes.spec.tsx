import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@library/theme';
import Routes from './Routes';

describe('Routes', () => {
  it('should Routes was created', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should Routes render a ThemeProvider', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(ThemeProvider)).toHaveLength(1);
  });

  it('should render the Home component on /', () => {
    const wrapper = shallow(<Routes />);
    const routeAttributes = wrapper.findWhere(n => n.prop('path') === '/' && n.prop('component') === 'Home');
    expect(routeAttributes).toBeDefined();
  });
});
