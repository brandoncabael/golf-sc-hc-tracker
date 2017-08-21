import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Form extends Component {   
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            courseName: ' ',
            courseRating: 0,
            slope: 0,
            holeCount: 9,
            playerTotalScore: 0,
            parTotalScore: 0,
            playerScoresArray: [],
            parScoresArray: [],
            date: null,
            handicap: 0,
            playerScoreDiff: 0
        }
        this.formHandler = this.formHandler.bind(this);
        this.playerScoresHandler = this.playerScoresHandler.bind(this);
        this.parScoresHandler = this.parScoresHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calculateHandicap = this.calculateHandicap.bind(this);
    }
    formHandler(key, event) {
        const newState = {};
        newState[key] = event.target.value
        this.setState(newState)
        console.log(this.state)
        if (key === "holeCount")
            this.setState({
                playerTotalScore: 0,
                parTotalScore: 0,
                playerScoresArray: [],
                parScoresArray: []
            })
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    playerScoresHandler(key, event) {
        const oldScores = this.state.playerScoresArray;
        oldScores[key] = parseInt(event.target.value, 10);
        this.setState({
            playerScoresArray: oldScores,
            playerTotalScore: oldScores.reduce((a, b) => ((a || 0)+(b || 0)), 0)
        })
        console.log(this.state)
    }

    parScoresHandler(key, event) {
        const oldScores = this.state.parScoresArray;
        oldScores[key] = parseInt(event.target.value, 10);
        this.setState({
            parScoresArray: oldScores,
            parTotalScore: oldScores.reduce((a, b) => ((a || 0) + (b || 0)), 0)
        })
        console.log(this.state)
    }

    calculateHandicap() {
        let handicapTemp = ((this.state.playerTotalScore - this.state.courseRating) * 113 / this.state.slope)
        let playerScoreDiffTemp = (this.state.playerTotalScore - this.state.parTotalScore)
        this.setState({
            handicap: handicapTemp,
            playerScoreDiff: playerScoreDiffTemp
        })
    }

    renderTable() {
        let holeNumber = [];
        let playerScoreArray = [];
        let parScoreArray = [];
        for (let i = 0; i < this.state.holeCount; i++) {
            holeNumber.push(<td key={"hole" + (i + 1)}>{i + 1}</td>);
            playerScoreArray.push(<td key={"playerScore" + (i + 1)}><input type="number" name={"player" + i} className="playerScore" defaultValue={this.state.playerScoresArray[i] || 0} onKeyUp={e => this.playerScoresHandler(i, e)} /></td>);
            parScoreArray.push(<td key={"parScore" + (i + 1)}><input type="number" name={"par" + i} className="parScore" defaultValue={this.state.parScoresArray[i] || 0} onKeyUp={e => this.parScoresHandler(i, e)} /></td>);
        }
        return (
            <table className="center">
                <thead>
                    <tr><th>Scorecard:</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hole:</td>
                        {holeNumber}
                        <td>Total:</td>
                    </tr>
                    <tr>
                        <td>Par:</td>
                        {parScoreArray}
                        {this.state.parTotalScore}
                    </tr>
                    <tr>
                        <td>Score:</td>
                        {playerScoreArray}
                        {this.state.playerTotalScore}
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <div className="Form">
                <div className="Form-Header">
                    <h1>Enter your scores and course info below:</h1>
                </div>
                <div className="Form-Body">
                    <form>
                        <label>
                            Course Name:
                            <input type="text" name="courseName" onKeyUp={e => this.formHandler("courseName", e)} />
                        </label>
                        <label>
                            &nbsp;Course Rating:
                            <input type="number" name="courseRating" onKeyUp={e => this.formHandler("courseRating", e)} />
                        </label>
                        <label>
                            &nbsp;Slope:
                            <input type="number" name="slope" onKeyUp={e => this.formHandler("slope", e)} />
                        </label>
                        <label>
                            &nbsp;# of Holes:
                            <select name="holeCount" onChange={e => this.formHandler("holeCount", e)} >
                                <option value="9">9</option>
                                <option value="18">18</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            &nbsp;Date Played:
                            <DatePicker dateFormat="MM-DD-YYYY" selected={this.state.startDate} onSelect={this.handleChange} title="Date played: " />
                        </label>
                        <br />
                        <p> Course Name: {this.state.courseName} Course Rating: {this.state.courseRating} Slope: {this.state.slope} # of Holes: {this.state.holeCount} Date: {this.state.startDate.format('MM-DD-YYYY')} </p>
                    </form>
                    <form>
                        {this.renderTable()}
                    </form>
                    <p>Handicap:&nbsp; {this.state.handicap}&nbsp;Player Score: {this.state.playerScoreDiff}</p><button type="button" onClick={this.calculateHandicap}>Calculate</button>
                </div>
            </div>

        )
    }
}

export default Form;