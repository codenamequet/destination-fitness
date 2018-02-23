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
    // pass props from ExerciseLog component and show that data in this component          
    render () {
        return (
            <div>
                <h1 className="center">Destination Fitness</h1>
                <ExerciseLog />
                {/* Need all of the below feilds to update after user inputs new values in a specific exercise */}

                <h2 className="center">All Exercises</h2>
                {/* Add data from ExerciseLog to this component */}
                <p className="center">Distance: 3.5</p>
                <p className="center">Duration: 75 minutes</p>
                <p className="center">Calories: 1,782 burned</p>
                <p className="center">Progress: 8/1000 miles</p>

                <h2 className="center">Running</h2>
                <p className="center">Distance: 2.5 miles</p>
                <p className="center">Duration: 15 minutes</p>
                <p className="center">Calories: 595 burned</p>

                <h2 className="center">Cycling</h2> 
                <p className="center">Distance 6.25</p>
                <p className="center">Duration: 30 minutes</p>
                <p className="center">Calories: 893 burned</p>
            </div>
        )
    }
}

export default Exercise
