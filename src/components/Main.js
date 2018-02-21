import React, {Component} from 'react'
import Header from './Header'
import Footers from './Footers'
import Exercise from './Exercise'

class Main extends Component {
    render () {
        return (
            <div>
                <Header />
                <Exercise />
                <Footers />
            </div>
        )
    }
}

export default Main
