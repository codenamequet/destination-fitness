import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Link, Redirect, Switch, Route} from 'react-router-dom'
import Exercise from './components/Exercise'
import Header from './components/Header'
import Footers from './components/Footers'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
import ExerciseLog from './components/ExerciseLog'

class App extends Component {
  render() {
    // Create routes here for app
    return (
      <div>
        {/* <Router> */}
        <Header />
        <Footers />
          {/* <Main /> */}
          {/* <Switch>
            <Route path='/about' component={About} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Main} />
          </Switch>         
        </Router>  */}
        
      </div>
    )
  }
}

export default App
