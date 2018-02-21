import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import '../styles/Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return(
            <div>
              <Navbar className='page-header right blue' id='sticky-nav' brand='Destination Fitness'>
                <NavItem href='#'><div className=''>Home</div></NavItem>
                <NavItem href='#'><div className=''>About</div></NavItem>
                <NavItem href='#'><div className=''>Sign Up</div></NavItem>
                <NavItem href='#'><div className=''>Sign In</div></NavItem>
              </Navbar>
            </div>
        )
    }
}

export default Header
