import { blogReducer } from '@features/blog'
import { deviceReducer } from '@features/devices'
import { exampleReducer } from '@features/example'
import { screenReducer } from '@features/screen'
import { combineReducers } from 'redux'

/* 
===== TODO =====
[ ] Auth Features
[ ] Routes Features
[ ] Product Features
[ ] Clinic Features
=== END TODO ===
*/

const reducer = combineReducers({
  example: exampleReducer,
  screen: screenReducer,
  device: deviceReducer,
  blog: blogReducer,
})

export default reducer
