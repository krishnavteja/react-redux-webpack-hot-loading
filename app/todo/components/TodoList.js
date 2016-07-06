import React, { Component } from 'react'
import actions from '../actions'

class TodoList extends Component {

  handleDelete(id) {
    event.preventDefault();
    this.props.dispatch(actions.deleteTodo(id));
  }

  render() {
    return (
      <ul>

        {
          this.props.todos.map((todo) => {
            return <li key={todo.id}>
                      {todo.text}
                      <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
                    </li>
          })
        }

      </ul>
    )
  }

}

export default TodoList