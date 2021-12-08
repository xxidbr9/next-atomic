import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { deviceReducer } from '@features/devices'
import { exampleReducer } from '@features/example'
import { screenReducer } from '@features/screen'
import { examplePersistConfig } from './persist'

/* 
===== TODO =====
[ ] Auth Features
[ ] Routes Features
[ ] Product Features
[ ] Clinic Features
=== END TODO ===
*/

const reducer = combineReducers({
  example: persistReducer(examplePersistConfig, exampleReducer),
  screen: screenReducer,
  device: deviceReducer,
})

export default reducer
