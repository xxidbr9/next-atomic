import storage from 'redux-persist/lib/storage'

export const globalPersistConfig = {
  key: 'global',
  whitelist: [''], // make sure it does not clash with server keys
  storage,
}

// Store on different Key
export const examplePersistConfig = {
  key: 'example',
  storage: storage,
}
