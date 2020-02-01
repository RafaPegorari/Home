import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, history, Loading } from '@library/theme';
import Home from './views/Home';
import './i18n';

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Router history={history}>
      <ThemeProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  </Suspense>
);

export default Routes;
