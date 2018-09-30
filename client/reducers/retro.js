const retro = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RETRO':
      return state;
    default:
      return state
  }
}

export default retro;