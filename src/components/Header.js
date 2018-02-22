import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import '../styles/Header.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import About from './About'
import Register from './Register'
import Login from './Login'
import Main from './Main'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return(
            <div>
                <Router>
                    <div>
                    <div class="router-child">
                        <Navbar className='page-header right blue' id='sticky-nav' brand='Destination Fitness'>
                            <NavItem href='#'><div className=''><Link to='/home'>Home</Link></div></NavItem>
                            <NavItem href='#'><div className=''><Link to='/about'>About</Link></div></NavItem>
                            <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
                            <NavItem href='#'><div className=''><Link to='/login'>Sign In</Link></div></NavItem>
                        </Navbar>
                    </div>
                    <div>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/register' component={Register} />
                            <Route path='/login' component={Login} />
                            <Route path='/home' component={Main} />
                        </Switch>
                    </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Header
