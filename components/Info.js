import React, { Component } from 'react';
import Summary from './Summary';
import Career from './Career';
import Education from './Education';
import SummaryInput from './SummaryInput';
import CareerInput from './CareerInput';
import EduInput from './EduInput';
import data from '../data';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdit: false,
            careerEdit: false,
            eduEdit: false,
            skillEdit: false,
        };
        this.editSum = this.editSum.bind(this);
        this.editCareer = this.editCareer.bind(this);
        this.editEdu = this.editEdu.bind(this);
        this.editSkill = this.editSkill.bind(this);
    }
    editSum() {
        this.setState({ sumEdit: !this.state.sumEdit });
    }
    editCareer() {
        this.setState({ careerEdit: !this.state.careerEdit });
    }
    editEdu() {
        this.setState({ eduEdit: !this.state.eduEdit });
    }
    editSkill() {
        this.setState({ skillEdit: !this.state.skillEdit });
    }
    render() {
        return (
            <div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle heading-title">
                            Summary:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editSum}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.sumEdit ? (
                                <SummaryInput done={this.editSum} />
                            ) : (
                                <Summary summary={data.summary} />
                            )}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle heading-title">
                            Career:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editCareer}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.careerEdit ? (
                                <CareerInput done={this.editCareer} />
                            ) : null}
                            <Career
                                career={data.career}
                                edit={this.state.careerEdit}
                            />
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle heading-title">
                            Education:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editEdu}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.eduEdit ? (
                                <EduInput done={this.editEdu} />
                            ) : null}
                            <Education
                                edu={data.education}
                                edit={this.state.eduEdit}
                            />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Info;