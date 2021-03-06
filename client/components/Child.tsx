import React, { Component } from 'react'

class Child extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { local: 'state' }
  }
  render() {
    const { local } = this.state
    return (
      <p>
        Child Component{' '}
        <input type="text" value={local} onChange={e => this.setState({ local: e.target.value })} />
      </p>
    )
  }
}

export default Child
