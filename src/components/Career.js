import React, { Component } from 'react';
import data from '../data';

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.career,
        };
        this.delJob = this.delJob.bind(this);
    }

    delJob(e) {
        data.career.splice(Number(e.target.id), 1);
        this.setState({ data: data.career });
    }
    render() {
        let carArr = this.props.career.map((work, index) => {
            return (
                <div className="box" key={index}>
                    <div>
                        <div className="subtitle">{work.year}</div>
                    </div>
                    <div>
                        <div
                            className="career-company"
                            style={{ marginBottom: '10px' }}
                        >
                            {work.company}
                            {this.props.edit ? (
                                <span
                                    id={index}
                                    className="fa fa-trash info-del"
                                    onClick={this.delJob}
                                ></span>
                            ) : null}
                        </div>
                        <div className="career-title">{work.position}</div>
                        <div>{work.workDone}</div>
                    </div>
                </div>
            );
        });
        return <div>{carArr}</div>;
    }
}

export default Career;
