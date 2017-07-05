import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
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
                            <input type="text" name="courseName" onKeyUp={e => this.props.formHandler("courseName", e)} />
                        </label>
                        <label>
                            &nbsp;Course Rating:
                            <input type="number" name="courseRating" onKeyUp={e => this.props.formHandler("courseRating", e)} />
                        </label>
                        <label>
                            &nbsp;Slope:
                            <input type="number" name="slope" onKeyUp={e => this.props.formHandler("slope", e)} />
                        </label>
                    </form>
                </div>
            </div>

        )
    }
}

export default Form;