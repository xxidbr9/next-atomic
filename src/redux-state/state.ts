/* 
? ===== INFO ===== ?



? === END INFO === ?
*/
import { BlogStateType } from '@features/blog/blog.reducer'
import { DeviceStateType } from '@features/devices/device.reducer'
import { ExampleStateType } from '@features/example/example.reducer'
import { ScreenStateType } from '@features/screen/screen.reducer'

export default null

export type IStateType = {
  example?: ExampleStateType
  screen?: ScreenStateType
  device?: DeviceStateType
  blog?: BlogStateType
}
