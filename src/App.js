import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCfPREfFOpLWcUCvZ5cw9I3RR6O4CRPWXc",
      authDomain: "manager-9da53.firebaseapp.com",
      databaseURL: "https://manager-9da53.firebaseio.com",
      projectId: "manager-9da53",
      storageBucket: "manager-9da53.appspot.com",
      messagingSenderId: "97258012517"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
