import App from './components/App'
import configureStore from './store'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const untypedWindow: any = window

const store = configureStore(untypedWindow.initialStoreData)
untypedWindow.dev = { store }

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
