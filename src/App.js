import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Login from './Login'
import Exercise from './components/Exercise'
import Header from './components/Header'
import Footers from './components/Footers'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  render() {
    // Create routes here for app
    return (
      <div>
      <Header />
      <Exercise />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <About /> */}
      <Footers />
      </div>
    )
  }
}

export default App;
