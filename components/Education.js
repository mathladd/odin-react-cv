import React, { Component } from 'react';
import data from '../data';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: this.props.edu,
        };
        this.delEdu = this.delEdu.bind(this);
    }

    delEdu(e) {
        data.education.splice(Number(e.target.id), 1);
        this.setState({ edu: data.education });
    }
    render() {
        let carArr = this.props.edu.map((study, index) => {
            return (
                <div className="box" key={index}>
                    <div>
                        <div className="subtitle">{study.year}</div>
                    </div>
                    <div>
                        <div
                            className="subtitle"
                            style={{ marginBottom: '10px' }}
                        >
                            {study.title}
                            {this.props.edit ? (
                                <span
                                    id={index}
                                    className="fa fa-trash info-del"
                                    onClick={this.delEdu}
                                ></span>
                            ) : null}
                        </div>
                        <div>{study.school}</div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Education;
