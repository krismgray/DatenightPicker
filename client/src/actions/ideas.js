import axios from 'axios';

export const deleteIdea = (id) => {
  return (dispatch) => {
    axios.delete(`/api/ideas/${id}`)
      .then( () => dispatch({ type: 'DELETE_IDEA', id }) )
  }
}
