import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Card from './Card.jsx'
import RichSearch from './RichSearchBox/index.jsx'

export default class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.autocomplete = this.autocomplete.bind(this)
    this.search = this.search.bind(this)

    this.suggestions = [
      {value: "Hello"},
      {value: "World"}
    ]
  }

  autocomplete() {

  }

  search() {

  }

  render () {
    return <RichSearch autocomplete={this.autocomplete} search={this.search} suggestions={this.suggestions} />
  }
}
