import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Form from '../Components/Form';

class App extends Component {
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
                </div>
                
            </div>


            )
    }
}

export default App;