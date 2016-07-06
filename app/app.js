import React from 'react'
import { render } from 'react-dom'
import Todo from './todo/components/Todo'
import configureStore from './todo/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Test todo'
  }]
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('app')
)