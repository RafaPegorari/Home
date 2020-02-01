import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
  public componentDidCatch(error: Error): void {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  public render(): JSX.Element {
    return <Routes />;
  }
}

export default App;
