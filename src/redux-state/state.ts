/* 
? ===== INFO ===== ?



? === END INFO === ?
*/
import { DeviceStateType } from '@features/devices/device.reducer'
import { ExampleStateType } from '@features/example/example.reducer'
import { ScreenStateType } from '@features/screen/screen.reducer'

export default null

export type IStateType = {
  example?: ExampleStateType
  screen?: ScreenStateType
  device?: DeviceStateType
}
