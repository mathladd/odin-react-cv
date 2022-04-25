import React, { Component } from 'react';
import data from '../data';
import EditBox from './EditBox';

class InteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addHobby = this.addHobby.bind(this);
    }
    
    addHobby(e) {
        if (this.state.hobby.trim() !== '') {
            data.interests.push(this.state.hobby);
        }
        this.props.editInte();
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.addHobby}>
                <div className="edit-title">Interest(Hobbies):</div> 

                <EditBox placeholder="e.g. Cooking" id="hobby" onChange={this.handleChange} />

                <div className="edit-button-container"> 
                    <button>Add</button>
                    <button onClick={this.props.editInte}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default InteInput;
