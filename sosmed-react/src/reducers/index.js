import { combineReducers } from 'redux';

import faceReducer from './faceReducer'

export default combineReducers({
  face: faceReducer,
})
