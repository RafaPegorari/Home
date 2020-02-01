import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { domElementGetter } from '@library/theme';
import App from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => domElementGetter('home'),
});

export const { bootstrap, mount, unmount } = reactLifecycles;
