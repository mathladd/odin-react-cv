import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { phone, email, linkedIn } = this.props.data;
        return (
            <div>
                <div className="heading-title">
                    Contact Me
                    <i
                        className="fa fa-pencil per-edit"
                        aria-hidden="true"
                        onClick={this.props.done}
                    ></i>
                </div>
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
