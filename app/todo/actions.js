// todos/actions.js
import t from './actionTypes';

let actions = {
  addTodo: function(text) {
    return {
      type: 'todos/ADD', // todo: use actiontypes const values
      text: text
    }
  },
  deleteTodo: function(id) {
    return {
      type: 'todos/DELETE', // todo: use actiontypes const values
      id: id
    }
  } 
}

export default actions