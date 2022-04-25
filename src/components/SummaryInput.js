import React, { Component } from 'react';
import data from '../data';

class SummaryInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: data.summary,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeSumm = this.changeSumm.bind(this);
    }

    changeSumm(e) {
        data.summary = this.state.summary.trim();
        this.props.editSum();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {
        return (
            <form className="edit-form" onSubmit={this.changeSumm}>
                <textarea
                    placeholder="write something about yourself..."
                    id="summary" className="edit-box"
                    value={this.state.summary}
                    onChange={this.handleChange}
                />
                
                <div className="edit-button-container"> 
                    <button>Submit</button>
                    <button onClick={this.props.editSum}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default SummaryInput;
