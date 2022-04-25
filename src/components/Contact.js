import React, { Component } from 'react';
import data from '../data';

class Contact extends Component {
    
    render() {
        let { phone, email, linkedIn } = data.contact;
        return (
            <div>
                {phone === '' || (
                    <div className="container">
                        <span className="subtitle">Phone: </span>
                        <span className="subtitle">{phone}</span>
                    </div>
                )}
                {email === '' || (
                    <div className="container">
                        <span className="subtitle">Email: </span>
                        <span className="subtitle">{email}</span>
                    </div>
                )}
                {linkedIn === '' || (
                    <div className="container">
                        <span className="subtitle">
                            LinkedIn:{' '}
                        </span>
                        <span className="subtitle">
                            {linkedIn}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Contact;
