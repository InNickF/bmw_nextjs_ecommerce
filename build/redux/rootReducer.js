import { combineReducers } from 'redux-immutable'
import { reducers as coreReducers } from '../common/redux'

const rootReducer = combineReducers({
  ...coreReducers
  // here custom reducers
})


export default rootReducer
