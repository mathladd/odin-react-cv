import React, { Component } from 'react';
import Summary from './Summary';
import Career from './Career';
import Edu from './Edu';
import SummaryInput from './SummaryInput';
import CareerInput from './CareerInput';
import EduInput from './EduInput';
import EditButton from './EditButton';

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
                <div className="info-container">
                    <div className="heading-title info-title">Summary:
                        <EditButton onClick={this.editSum} />
                    </div>
                    {this.state.sumEdit ?
                    <SummaryInput editSum={this.editSum} /> :
                    <Summary />}
                </div>
                
                <div className="info-container">
                    <div className="heading-title info-title">Career:
                        <EditButton onClick={this.editCareer} />
                    </div>
                    {this.state.careerEdit ?
                    <CareerInput editCareer={this.editCareer} /> : null}
                    <Career careerEdit={this.state.careerEdit} />
                </div>

                <div className="info-container">
                    <div className="heading-title info-title">Education:
                        <EditButton onClick={this.editEdu} />
                    </div>
                    {this.state.eduEdit ?
                    <EduInput editEdu={this.editEdu} /> : null}
                    <Edu eduEdit={this.state.eduEdit} />
                </div>
            </div>
        );
    }
}

export default Info;
