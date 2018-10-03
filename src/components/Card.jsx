import React, { Component } from 'react'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='card' onClick={this.props.action}>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
