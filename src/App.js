import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Link, Redirect, Switch} from 'react-router-dom'
// import Login from './Login'
// import Exercise from './components/Exercise'
// import Header from './components/Header'
// import Footers from './components/Footers'
// import About from './components/About'
// import Login from './components/Login'
// import Register from './components/Register'
import Main from './components/Main'
// import ExerciseLog from './components/ExerciseLog'

class App extends Component {
  render() {
    // Create routes here for app
    return (
      <div>
      <Router>
      <Main />
      {/* <Switch>
        <Route path='/exercise' component={Exercise} />
        {/* <Route path='/exerciselog' component={ExcerciseLog} /> */}
        {/* <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Main} />
      </Switch> */}
      </Router>
      </div>
    )
  }
}

export default App;
