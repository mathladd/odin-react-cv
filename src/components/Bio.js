import React from 'react';
import data from '../data';
import FullName from './FullName';
import NameInput from './NameInput';
import Contact from './Contact';
import Social from './Social';
import Interests from './Interests';
import ContactInput from './ContactInput';
import SocialInput from './SocialInput';
import InterInput from './InterInput';
import EditButton from './EditButton';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEdit: false,
            contactEdit: false,
            socialEdit: false,
            socData: data.social,
            inteEdit: false,
        };
        this.editName = this.editName.bind(this);
        this.editContact = this.editContact.bind(this);
        this.editSocial = this.editSocial.bind(this);
        this.editInte = this.editInte.bind(this);
    }
    editName() {
        this.setState({ nameEdit: !this.state.nameEdit });
    }
    editContact() {
        this.setState({ contactEdit: !this.state.contactEdit });
    }
    editSocial() {
        this.setState({ socialEdit: !this.state.socialEdit });
    }
    editInte() {
        this.setState({ inteEdit: !this.state.inteEdit });
    }
    render() {
        return (<div className="bio-container">

            {this.state.nameEdit ?
            <NameInput editName={this.editName} /> : 
            <FullName editName={this.editName} />}


            <div className="heading-title bio-title">Contact Me
                <EditButton onClick={this.editContact} />
            </div>
            {this.state.contactEdit ? 
            <ContactInput editContact={this.editContact} /> : 
            <Contact editContact={this.editContact} />}


            <div className="heading-title bio-title">Social
                <EditButton onClick={this.editSocial} />
            </div>
            {this.state.socialEdit ?
            <SocialInput editSocial={this.editSocial} /> : null}
            {<Social editSocial={this.editSocial} socialEdit={this.state.socialEdit} />}


            
            <div className="heading-title bio-title">Interests
                <EditButton onClick={this.editInte} />
            </div>
                {this.state.inteEdit ?
                <InterInput editInte={this.editInte} /> : null}
                <Interests editInte={this.editInte}  inteEdit={this.state.inteEdit} />
        </div>);
    }
}

export default Name;
