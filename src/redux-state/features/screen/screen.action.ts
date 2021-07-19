import { SCREEN_TYPE } from '@utils/constants/screenType'
import { ActionRedux } from '@utils/types/redux'
import { ScreenType } from '@utils/types/screen'
import actionTypes, { ScreenConstantsTypes } from './screen.constant'
import { ScreenStateType } from './screen.reducer'

export function setScreenSize(
  data: ScreenType
): ActionRedux<ScreenConstantsTypes, ScreenStateType> {
  return {
    type: actionTypes.SET_SCREEN_TYPE,
    payload: {
      screen_type: data,
    },
  }
}
