import React, {Component} from 'react'
import {Row, Input, Button, Collapsible, CollapsibleItem} from 'react-materialize'

import '../styles/ExerciseLog.css'

class ExerciseLog extends Component {
    constructor (props) {
        super (props)
        this.state = [
            {
            exercise: 'Running',
            distance: 0,
            duration: 0,
            calories: 0,
            },
            {
            exercise: 'Cycling',
            distance: 0,
            duration: 0,
            calories: 0,
            },
            {
            exercise: 'Ellipticle',
            distance: 0,
            duration: 0,
            calories: 0,
            }
        ] 
    // a = this.state[i].exercise
    // selection = this.state[a].exercise
    // so if a = 2 then selection = this.state[2].exercise
    // output of the above line should now be Ellipticle

        this.handleDistanceInput = this.handleDistanceInput.bind(this)
        this.handleDurationInput = this.handleDurationInput.bind(this)
        this.handleCalorieInput  = this.handleCalorieInput.bind(this)
        this.onSubmitQuery       = this.onSubmitQuery.bind(this)
        this.handleSelection     = this.handleSelection.bind(this)
    }

    handleSelection(e) {
        // this.setState({selection: e.target.value})
        let selection = e.target.value
        console.log(selection)
    }

    handleDistanceInput (e) {
        console.log(e.target.value)
        // this.setState({dis})
        // this.handleDistanceInput(e.target.value)
        // this.setState({
        // this.state.tracker[this.state.selection]
    }

    handleDurationInput (e) {
        console.log(e.target.value)
        // this.handleDurationInput(e.target.value)
    }

    handleCalorieInput (e) {
        console.log(e.target.value)
        // this.handleCalorieInput(e.target.value)
    }

    onSubmitQuery (e) {
        // e.preventDefault()
        console.log(e.target.value)
        console.log('working')
        // this.onSubmitQuery(this.props.query)
    }

    render () {
        return (
            <div>
                <Collapsible>
                    <CollapsibleItem className="center blue-text" header='Log Workout'>
                        <Row>
                            <Input type="select" label="Exercise" s={3} onChange={this.handleSelection}>
                                <option value="1"></option>
                                <option value={this.state[0].exercise}>{this.state[0].exercise}</option>
                                <option value={this.state[1].exercise}>{this.state[1].exercise}</option>
                                <option value={this.state[2].exercise}>{this.state[2].exercise}</option>
                            </Input> {/* the value doesn't need to be below as onchange will be the new value that gets returned to the event handler*/}
                            <Input className="center-align" type="number" name="distance" label="Distance" s={3}  value={this.state.distance} onChange={this.handleDistanceInput} />
                            <Input className="center-align" type="number" name="duration" label="Duration" s={3}  value={this.state.duration} onChange={this.handleDurationInput} />
                            <Input className="center-align" type="number" name="calories" label="Calories" s={3} value={this.state.calories} onChange={this.handleCalorieInput} />
                            <Button className="center blue" waves='light' onSubmit={this.onSubmitQuery}>submit</Button>
                        </Row>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}

export default ExerciseLog
