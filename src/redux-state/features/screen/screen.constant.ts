enum SCREEN_CONSTANT {
  SET_SCREEN_TYPE = 'screen/SET_SCREEN_TYPE',
  GET_SCREEN_TYPE = 'screen/GET_SCREEN_TYPE',
}

const screenConstants = {
  ...SCREEN_CONSTANT
}

export type ScreenConstantsTypes = SCREEN_CONSTANT
export default screenConstants