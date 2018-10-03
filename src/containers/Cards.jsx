import { connect } from 'react-redux'
import Cards from '../components/Cards.jsx'

import { newCard, removeCard } from '../actions'

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newCard: (card) => {
      dispatch(newCard(card))
    },
    removeCard: (index) => {
      dispatch(removeCard(index))
    }
  }
}

const HomeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default HomeConnect
