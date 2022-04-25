import React, { Component } from 'react';
import data from '../data';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: data.education,
        };
        this.delEdu = this.delEdu.bind(this);
    }

    delEdu(e) {
        data.education.splice(Number(e.target.id), 1);
        this.setState({ edu: data.education });
    }
    
    render() {
        let schoolsArr = data.education.map((study, index) => {
            return (
                <div className="info-box" key={index}>
                    <div className="info-year" >{study.year}</div>
                    <div className="info-place">
                        {study.school}    
                        {this.props.eduEdit ?
                            <span
                                id={index}
                                className="fa fa-trash info-del"
                                onClick={this.delEdu}
                            ></span> : null}
                    </div>
                    <div className="info-position" >{study.title}</div>
                </div>
            );
        });
        return <div>{schoolsArr}</div>;
    }
}

export default Education;
