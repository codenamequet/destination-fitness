import React, {Component} from 'react'
import {Footer} from 'react-materialize'

class Footers extends Component {
    
        render () {
            return (
                <div>
                    <Footer className="blue" copyrights='&copy; 2018 Destination Fitness'>
                    {/* <Footer copyrights='&copy; 2018 Copyright Dollar Beer Club'> */}

                    </Footer>
                </div>
            )
        }
}

export default Footers
