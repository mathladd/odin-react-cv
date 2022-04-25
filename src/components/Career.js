import React, { Component } from 'react';
import data from '../data';

class Career extends Component {
    constructor(props) {
        super(props);
        this.delJob = this.delJob.bind(this);
    }

    delJob(e) {
        data.career.splice(Number(e.target.id), 1);
        this.setState({ data: data.career });
    }
    
    render() {
        let jobsArr = data.career.map((work, index) => {
            return (
                <div className="info-box" key={index}>
                    <div className="info-year">{work.year}</div>
                    <div className="info-place">
                        {work.company}
                        {this.props.careerEdit ?
                            <span
                                id={index}
                                className="fa fa-trash info-del"
                                onClick={this.delJob}
                            ></span> : null}
                    </div>
                    <div className="info-position">{work.position}</div>
                    <div className="info-extra">{work.workDone}</div>
                </div>
            );
        });
        
        return <div>{jobsArr}</div>;
    }
}

export default Career;
