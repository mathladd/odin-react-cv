import React, { Component } from 'react';
import data from '../data';
import EditBox from './EditBox';

class SocialInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            website: '',
            userName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.addSocial = this.addSocial.bind(this);
    }

    addSocial(socAct) {
        if (socAct.website !== '' && socAct.userName !== '') {
            data.social.push({ ...socAct, id: data.social.length });
        }
    }

    handleForm(e) {
        const obj = (() => {
            return {
                id: '',
                website: this.state.website.trim(),
                userName: this.state.userName.trim(),
            };
        })();
        this.addSocial(obj);
        this.props.editSocial();
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <div className="edit-title">Website:</div>
                    <EditBox placeholder="e.g. Instagram" id="website" onChange={this.handleChange} />
                    
                    <div className="edit-title">User Id:</div>
                    <EditBox placeholder="User ID" id="userName" onChange={this.handleChange} />
                    
                    <div className="edit-button-container"> 
                        <button>Submit</button>
                        <button onClick={this.props.editSocial}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SocialInput;
