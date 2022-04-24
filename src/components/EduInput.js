import React, { Component } from 'react';
import data from '../data';

class EduInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            school: '',
            title: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addEdu = this.addEdu.bind(this);
    }
    addEdu(e) {
        let { startYear, endYear, year, school, title } = this.state;
        if (
            startYear.trim() === '' ||
            endYear.trim() === '' ||
            school.trim() === '' ||
            title.trim() === ''
        ) {
            this.props.done();
            e.preventDefault();
            return;
        }
        year = startYear + ' - ' + endYear;
        const obj = (() => {
            return { id: '', year, school, title };
        })();
        data.education = data.education.map((job, index) => {
            return { ...job, id: index };
        });
        data.education.push({ ...obj, id: data.education.length });
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.addEdu}>
                <div>Add Education Details:</div>
                
                <div>Starting Year:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="start year"
                    id="startYear"
                    value={this.state.startYear}
                    onChange={this.handleChange}
                ></input>
                
                <div>Ending Year:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="end year(/current)"
                    id="endYear"
                    value={this.state.endYear}
                    onChange={this.handleChange}
                ></input>
                
                <div>College/School Name:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="eg: Monsters.Inc"
                    id="school"
                    value={this.state.school}
                    onChange={this.handleChange}
                ></input>
                
                <div>Course Done:</div>
                <input
                    type="text" class="edit-box"
                    placeholder="eg: Manager"
                    id="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                ></input>
                

                <div class="edit-box-container"> 
                    <button>Submit</button>
                    <button onClick={this.props.done}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default EduInput;
