import React, { Component } from 'react'
const styles = require('./App.css')
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Child from './Child'

class App extends Component<any, any> {
  render() {
    const { count, dispatch } = this.props
    return (
      <div>
        <h1>Demo</h1>
        <p>{count.num}</p>
        <button className={styles.increment} onClick={() => dispatch({ type: 'INC' })}>
          +1
        </button>
        <Child />
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    )
  }
}

export default hot(module)(connect(state => ({ count: state }))(App))
