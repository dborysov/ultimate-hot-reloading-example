import { createStore } from 'redux'

const configureStore = (initialState?: any) => {
  const store = createStore(require('./reducers'), initialState)
  const untypedModule: any = module

  if (untypedModule.hot) {
    // Enable Webpack hot module replacement for reducers
    untypedModule.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
