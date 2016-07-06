import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)


 let configureStore = (initialState = { todos: [] }) => {
  return finalCreateStore(reducer, initialState)
}

export default configureStore