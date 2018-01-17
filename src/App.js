import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
