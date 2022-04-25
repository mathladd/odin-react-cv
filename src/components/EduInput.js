import React, { Component } from 'react';
import EditBox from './EditBox';
import data from '../data';

class EduInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            degree: '',
            school: '',
            classes: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addEdu = this.addEdu.bind(this);
    }

    addEdu(e) {
        let {startYear, endYear, degree, school, classes} = this.state;
        if (startYear.trim() !== '' &&
                endYear.trim() !== '' &&
                degree.trim() !== '' &&
                school.trim() !== '' &&
                classes.trim() !== '') {
            const year = startYear + ' - ' + endYear;
            const newSchool = {year, school, degree, classes};
            data.education.push({id: data.education.length, ...newSchool})
            console.log(data.education);
        }
        this.props.editEdu();
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {
        return (
            <form className="edit-form" onSubmit={this.addEdu}>
                <div className="edit-box-container">
                    <div className="edit-title">Starting Year:</div>
                    <EditBox placeholder="e.g. 2009" id="startYear" onChange={this.handleChange} />
                </div>
                
                <div className="edit-box-container">
                    <div className="edit-title">Ending Year:</div>
                    <EditBox placeholder="e.g. 2010 (or current)" id="endYear" onChange={this.handleChange} />
                </div>

                <div className="edit-box-container">
                    <div className="edit-title">Degree:</div>
                    <EditBox placeholder="e.g. MSc in Mechanical Engineering" id="degree" onChange={this.handleChange} />
                </div>

                <div className="edit-box-container">
                    <div className="edit-title">School Name:</div>
                    <EditBox placeholder="e.g. Monsters University" id="school" onChange={this.handleChange} />
                </div>
                
                <div className="edit-box-container">
                    <div className="edit-title">Course Completed:</div>
                    <EditBox placeholder="e.g. Political Science 104" id="classes" onChange={this.handleChange} />
                </div>

                <div className="edit-button-container"> 
                    <button>Submit</button>
                    <button onClick={this.props.editEdu}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default EduInput;
