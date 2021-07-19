enum CONSTANT {
  FAILURE = 'example/FAILURE',
  INCREMENT = 'example/INCREMENT',
  DECREMENT = 'example/DECREMENT',
  RESET = 'example/RESET',
  LOAD_DATA = 'example/LOAD_DATA',
  LOAD_DATA_SUCCESS = 'example/LOAD_DATA_SUCCESS',
  START_CLOCK = 'example/START_CLOCK',
  TICK_CLOCK = 'example/TICK_CLOCK',
  HYDRATE = 'example/HYDRATE',
}

const exampleConstants = {
  ...CONSTANT
}

export type ExampleConstantsTypes = CONSTANT
export default exampleConstants