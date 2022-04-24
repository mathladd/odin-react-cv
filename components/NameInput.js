import React, { Component } from 'react';
import data from '../data';

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
        if (!this.state.firstName.trim() || !this.state.lastName.trim()) {
            this.props.done();
            e.preventDefault();
            return;
        }
        data.name.first = this.state.firstName;
        data.name.last = this.state.lastName;
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form class="edit-form" onSubmit={this.changeName}>
                <div>
                    <input
                        type="text" class="edit-box"
                        placeholder="First Name"
                        id="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    ></input>
                </div>
                
                <div>
                    <input
                        type="text" class="edit-box"
                        placeholder="Last Name"
                        id="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    ></input>
                </div>

                <div class="edit-box-container"> 
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default NameInput;
