import { NativeModules } from 'react-native';
import { Reactotron as ReactotronT } from 'reactotron-core-client';
import Reactotron, { ReactotronReactNative, asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let tron: ReactotronT<ReactotronReactNative> & ReactotronReactNative | null;

if (__DEV__) {
  tron = Reactotron.configure({
    host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
  })
    .use(reactotronRedux())
    .use(asyncStorage({}))
    .use(sagaPlugin({}))
    .connect();

  tron.clear();

  //@ts-ignore
  console.tron = tron;
}

export default tron;
