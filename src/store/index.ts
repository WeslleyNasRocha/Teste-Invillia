import storage from '@react-native-community/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../configs/configureReactotron';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

let store: any;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

if (__DEV__) {
  store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer(),
    ),
  );
} else {
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares)),
  );
}

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { persistor, store };

export default () => store;
