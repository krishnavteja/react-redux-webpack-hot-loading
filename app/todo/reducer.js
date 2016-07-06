function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/ADD':
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      });
    case 'todos/DELETE': {

      var index = state.todos.map(function(e) { return e.id; }).indexOf(action.id);

      return Object.assign({}, state, {
        todos: [...state.todos.slice(0, index), 
              ...state.todos.slice(index + 1)]
      });
    }
    default: 
      return state;
  }
}

export default reducer