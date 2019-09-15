import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './src/configs/configureMapbox';
import Routes from './src/configs/routes';
import { persistor, store } from './src/store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
