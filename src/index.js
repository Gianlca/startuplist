import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { StoreProvider } from 'easy-peasy';
import store from './store/query';

import Root from './components/Root';

const render = Component => {
  ReactDOM.render (
    <StoreProvider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
    </StoreProvider>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root);
  });
}
