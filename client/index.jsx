import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './stores/store';
import AppContainer from './containers/AppContainer';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  html {
    background-color: coral;
  }
  body {
    margin: 0;
    font-family: 'Lato', monospace;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
