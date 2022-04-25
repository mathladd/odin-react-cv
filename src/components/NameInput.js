import React, { Component } from 'react';
import data from '../data';
import EditBox from './EditBox';

class NameInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: data.name.first,
            lastName: data.name.last,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changeName(e) {
        if (this.state.firstName.trim() && this.state.lastName.trim()) {
            data.name.first = this.state.firstName;
            data.name.last = this.state.lastName;
        }
        this.props.editName();
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <form class="edit-form" onSubmit={this.changeName}>

                <EditBox placeholder="First Name" id="firstName" onChange={this.handleChange} />

                <EditBox placeholder="Last Name" id="lastName" onChange={this.handleChange} />

                <div class="edit-button-container"> 
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default NameInput;
