import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './reducers'
import CounterContainer from './container/CounterContainer'

//Redux Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));


const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)



export default class AppSaga extends Component {
  render() {
    return <App />
  }
}

sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent('demo_redux_saga', () => App);