import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '@library/theme';
import { i18n } from '@library/i18next';
import '../../i18n';
import Home from './index';

describe('Home', () => {
  beforeEach(async () => {
    await i18n.init();
  });

  it('should render the right components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('should change language', async () => {
    const spyI18n = jest.spyOn(i18n, 'changeLanguage').mockImplementation();
    const wrapper = shallow(<Home />);

    wrapper.find('#change-language-pt').simulate('click');
    expect(spyI18n).toHaveBeenCalledWith('pt');

    wrapper.find('#change-language-en').simulate('click');
    expect(spyI18n).toHaveBeenCalledWith('en');

    expect(spyI18n).toHaveBeenCalledTimes(2);
  });
});
