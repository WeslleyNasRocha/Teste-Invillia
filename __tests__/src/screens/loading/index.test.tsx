import React from 'react';
import 'react-native';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import LoadingScreen from '../../../../src/screens/loading';
import { Provider } from 'react-redux';

describe('<LoadingScreen>', () => {
  it('should redirect to the welcome screen', () => {
    const mockStore = configureStore();
    const store = mockStore({
      welcome: {
        firstTime: true,
      },
    });
    let navigatedScreen;
    const navigation = {
      navigate: jest.fn().mockImplementation(arg => {
        navigatedScreen = arg;
      }),
    };
    
    mount(
      <Provider store={store}>
        <LoadingScreen navigation={navigation} />
      </Provider>,
    );
    expect(navigatedScreen).toBe('Welcome');
  });

  it('should redirect to the Home (map) screen', () => {
    const mockStore = configureStore();
    const store = mockStore({
      welcome: {
        firstTime: false,
      },
    });
    let navigatedScreen;
    const navigation = {
      navigate: jest.fn().mockImplementation(arg => {
        navigatedScreen = arg;
      }),
    };
    mount(
      <Provider store={store}>
        <LoadingScreen navigation={navigation} />
      </Provider>,
    );
    expect(navigatedScreen).toBe('Home');
  });
});
