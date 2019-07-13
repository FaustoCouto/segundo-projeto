import React from 'react'
import MainNavigation from './src/navigation/mainNavigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    )
  }
}
