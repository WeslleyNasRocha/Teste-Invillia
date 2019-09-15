import { combineReducers } from 'redux';
import welcome, { Types as welcomeTypes } from './welcome';
import places, { Types as placesTypes } from './places';

const reducers = combineReducers({
  welcome,
  places,
});

export default reducers;
export { welcomeTypes, placesTypes };
