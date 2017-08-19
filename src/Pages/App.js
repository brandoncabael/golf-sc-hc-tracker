import React, { Component } from 'react';

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
                    <p>This website will allow you to: <br /></p>
                        <ul>
                            <li>Enter and save your round scores</li>
                            <li>Calculate your handicap after minimum round count</li>
                        </ul>
                </div>
                <div className="App-Form-Course">
                    <Form formHandler={this.formHandler} />
                </div>
                
            </div>


            )
    }
}

export default App;