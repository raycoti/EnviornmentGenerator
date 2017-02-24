import { combineReducers } from 'redux'
import gridReducer from './grid';
import readerReducer from './readers';
import levelReducer from './level'
//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({
  grid: gridReducer,
  reader: readerReducer,
  level: levelReducer,
})
