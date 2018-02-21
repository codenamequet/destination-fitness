import React, {Component} from 'react'
import {Row, Input, Button, Collapsible, CollapsibleItem} from 'react-materialize'

import ExerciseLog from './ExerciseLog'
import '../App.css'

class Exercise extends Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }
    
    // show the distance, duration, and calories burned between all exercises
    // show the distance, duration, and calories burned of a specific exercise
    // be able to change the state of every exercise           
    render () {
        return (
            <div>
                <h1 className="center">Destination Fitness</h1>
                <ExerciseLog />
                {/* Need all of the below feilds to update after user inputs new values in a specific exercise */}

                <h2 className="center">All Exercises</h2>
                {/* Add data from ExerciseLog to this component */}
                <p className="center">Distance: </p>
                {/* <p className="center">Duration: 75 minutes</p>
                <p className="center">Calories: 1,782 burned</p>
                <p className="center">Progress: 8/1000 miles</p>

                <h2 className="center">{this.state[0].exercise}</h2>
                <p className="center">Distance: {this.state[0].distance + 2.5 } miles</p>
                <p className="center">Duration: {this.state[0].duration + 15 } minutes</p>
                <p className="center">Calories: {this.state[0].calories + 595}  burned</p>

                <h2 className="center">{this.state[1].exercise}</h2> 
                updateCycleDistance(distance) {
                this.setState({distance: this.state.distance})
                }
                <p>Duration: {this.setState.duration[1]} minutes</p>
                <p>Calories: {this.setState.calories[1]} burned</p> */}
            </div>
        )
    }
}

export default Exercise
