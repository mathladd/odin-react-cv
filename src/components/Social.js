import React, { Component } from 'react';
import data from '../data';

class Social extends Component {
    constructor(props) {
        super(props);
        this.delSocial = this.delSocial.bind(this);
    }

    delSocial(e) {
        data.social.splice(Number(e.target.id), 1);
        data.social = data.social.map((acc, index) => {
            return { ...acc, id: index };
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editSocial !== this.props.editSocial) {
            this.setState({ data: data.social });
        }
    }
    render() {       
        const socArr = data.social.map((handle) => {
            return (
                <div className="container" key={handle.id}>
                    <span className="subtitle">{handle.website + ': '}</span>
                    <span className="subtitle">{handle.userName}</span>
                    {(this.props.socialEdit) ? 
                        <i
                            id={handle.id}
                            className="fa fa-trash per-edit"
                            onClick={this.delSocial}
                        ></i> : null}
                </div>
            );
        });

        return(
            <div>
                {socArr}
            </div>
        );
    }
}

export default Social;
