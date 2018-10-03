const appPreData = window.localStorage.getItem('cardapp_cards') ? JSON.parse(window.localStorage.getItem('cardapp_cards')) : [{id: 0, text: 'Hello, React and Redux!'}]

const cards = (state = appPreData, action) => {
  if (action.type === 'CARD') {
    let newState = [...(handleCards(state, action))]
    window.localStorage.setItem('cardapp_cards', JSON.stringify(newState))
    return newState
  }

  return state
}

const handleCards = (state, action) => {
  switch (action.action) {
    case 'NEW':
      return [...state, {...action.card, id: Math.random()}]
    case 'REMOVE':
      let removeCards = [ ...state ]
      removeCards.splice(action.index, 1)
      return [...removeCards]
    default:
      return state
  }
}

module.exports = cards
