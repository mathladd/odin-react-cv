import React, { Component } from 'react';
import data from '../data';
import EditBox from './EditBox';

class CareerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            company: '',
            position: '',
            workDone: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addJob = this.addJob.bind(this);
    }

    addJob(e) {
        let {startYear, endYear, company, position, workDone} = this.state;
        if (startYear.trim() !== '' &&
                endYear.trim() !== '' &&
                company.trim() !== '' &&
                position.trim() !== '' &&
                workDone.trim() !== '') {
            const year = startYear + ' - ' + endYear;
            const newJob = {year, company, position, workDone};
            data.career.push({ ...newJob, id: data.career.length });
        }
        this.props.editCareer();
        e.preventDefault();
    }
    
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {
        return (
            <form className="edit-form" onSubmit={this.addJob}>
                <div className="edit-box-container"> 
                    <div className="edit-title">Starting Year:</div>
                    <EditBox placeholder="e.g. 2009" id="startYear"
                    onChange={this.handleChange} />
                </div>
                
                <div className="edit-box-container"> 
                    <div className="edit-title">Ending Year:</div>
                    <EditBox placeholder="e.g. 2010 (or current)" id="endYear" onChange={this.handleChange} />
                </div>
                
                <div className="edit-box-container"> 
                    <div className="edit-title">Company Name:</div>
                    <EditBox placeholder="e.g. Monsters Inc." id="company" onChange={this.handleChange} />
                </div>

                <div className="edit-box-container"> 
                    <div className="edit-title">Position:</div>
                    <EditBox placeholder="e.g General Supervisor" id="position" onChange={this.handleChange} />
                </div>
                
                <div className="edit-box-container"> 
                    <div className="edit-title">Work Done/Handled:</div>
                    <textarea className="edit-box" placeholder="General job description here..."
                        id="workDone"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="edit-button-container"> 
                    <button>Submit</button>
                    <button onClick={this.props.editCareer}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default CareerInput;
