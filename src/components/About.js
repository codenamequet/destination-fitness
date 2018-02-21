import React, {Component} from 'react'
import {Row, Col} from 'react-materialize'

class About extends Component {
    render() {
        return(
            <div>
                <section>
                    <h1 className="center">About</h1>
                    <Row>
                        <Col s={6}><p s={3}> Destination Fitness is an app created for those that love to travel. Destination Fitness is also an app built for those that love to work out, are looking for a reason to start working out more, and those just looking to acheive goals. Destination Fitness was made with the idea of wanting to visit a new place and possibly look like a new person after working out for potentially running,cycling, swimming thousands of miles. So whether you race in traitholons or want to lose a few pounds before that trip to Cancoon, this app is for you!</p></Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default About
