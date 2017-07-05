import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Form from '../Components/Form';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseName: 'No Name',
            courseRating: 0,
            slope: 0
        }
        this.formHandler = this.formHandler.bind(this);
    }
    formHandler(key, event) {
        const newState = {};
        newState[key] = event.target.value
        this.setState(newState)
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <div className="App-Header">
                    <h1>Golf Scores</h1>
                    <h3>Track Scores and Calculate Handicap!</h3>
                </div>
                <div className="App-Body">
                    <p>
                        This website will allow you to enter in your round scores, save them, and after a minimum round count has been met, calculate your handicap score.
                    </p>
                </div>
                <div className="App-Form-Course">
                    <Form formHandler={this.formHandler} />
                    <p> Course Name: {this.state.courseName} Course Rating: {this.state.courseRating} Slope: {this.state.slope} </p>
                </div>
                <div className="App-Form-Scores">
                    <table className="center">
                        <thead>
                            <th colSpan="18">Scorecard</th>
                        </thead>
                        <tr>
                            <td>Hole:</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr className="Par-Score">
                            <td>Course Par Score:</td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="parRating[]" class="parRating" />
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>Player Score:</td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                            <td>
                                <form>
                                    <input type="number" name="playerScore[]" class="playerScore" />
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            )
    }
}

export default App;