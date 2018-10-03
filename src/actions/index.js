export const newCard = (card) => {
  return {
    type: 'CARD',
    action: 'NEW',
    card
  }
}

export const removeCard = (index) => {
  return {
    type: 'CARD',
    action: 'REMOVE',
    index
  }
}
