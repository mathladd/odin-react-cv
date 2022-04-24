import React, { Component } from 'react';
import data from '../data';

class ContactInput extends Component {
    constructor(props) {
        super(props);
        this.state = { ...data.contact };
        this.handleChange = this.handleChange.bind(this);
        this.changeContact = this.changeContact.bind(this);
    }
    changeContact(e) {
        data.contact.phone = this.state.phone.trim();
        data.contact.email = this.state.email.trim();
        data.contact.linkedIn = this.state.linkedIn.trim();
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeContact}>
                <div>Contact Me</div>
                <div>Phone:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="Phone"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                ></input>

                <div>Email:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                ></input>

                <div>LinkedIn:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="Linkedin"
                    id="linkedIn"
                    value={this.state.linkedIn}
                    onChange={this.handleChange}
                ></input>
                
                <div class="edit-box-container"> 
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default ContactInput;
