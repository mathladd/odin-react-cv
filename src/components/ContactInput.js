import React, { Component } from 'react';
import EditBox from './EditBox'
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
        this.props.editContact();
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.changeContact}>
                <div className="edit-title">Phone:</div>
                <EditBox placeholder={this.state.phone} id="phone" onChange={this.handleChange} />

                <div className="edit-title">Email:</div>
                <EditBox placeholder={this.state.email} id="email" onChange={this.handleChange} />

                <div className="edit-title">LinkedIn:</div>
                <EditBox placeholder={this.state.linkedIn} id="linkedIn" onChange={this.handleChange} />
                
                <div className="edit-button-container"> 
                    <button>Submit</button>
                    <button onClick={this.props.editContact}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default ContactInput;
