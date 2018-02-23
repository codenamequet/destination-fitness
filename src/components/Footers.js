import React, {Component} from 'react'
import {Footer} from 'react-materialize'
import '../styles/Footers.css'

class Footers extends Component {
    
        render () {
            return (
                <div>
                    <Footer className="blue" copyrights='&copy; 2018 Destination Fitness' />
                </div>
            )
        }
}

export default Footers
