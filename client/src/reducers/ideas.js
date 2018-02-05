const ideas = (state = [], action) => {
  switch(action.type) {
    case 'DELETE_IDEA':
      return state.filter((idea, index) => index !== action.id);
    default:
      return state;
  }
}

export default ideas;
