import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Card from './Card.jsx'

export default class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.keyDown = this.keyDown.bind(this)
    this.newCard = this.newCard.bind(this)
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  keyDown (e) {
    if (e.keyCode === 13) {
      this.newCard()
    }
  }

  newCard () {
    this.setState({ value: '' })
    this.props.newCard({text: this.state.value})
  }

  render () {
    return (
      <div className='cards'>
        <ReactCSSTransitionGroup
          transitionName='card'
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.props.cards.map((card, index) => <Card
              key={card.id}
              action={() => this.props.removeCard(index)}
              {...card}
            />)
          }
          <div className='card' onClick={this.props.action}>
            <input placeholder={'Do the dishes'} value={this.state.value} onChange={this.handleChange} onKeyDown={this.keyDown} />
          </div>
        </ReactCSSTransitionGroup>
        <div className='card tiny' onClick={this.newCard}>
          <p>+</p>
        </div>
      </div>
    )
  }
}
