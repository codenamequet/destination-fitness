import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import '../styles/Header.css'
import {BrowserRouter as Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return(
            <div>
              <Navbar className='page-header right blue' id='sticky-nav' brand='Destination Fitness'>
                <NavItem href='#'><div className=''><Link to='/logon'>Home</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/about'>About</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/login'>Sign In</Link></div></NavItem>
              </Navbar>
            </div>
        )
    }
}

export default Header
