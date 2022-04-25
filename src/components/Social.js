import React, { Component } from 'react';
import data from '../data';

class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialDat: data.social,
        };
        this.delSocial = this.delSocial.bind(this);
    }

    delSocial(e) {
        data.social.splice(Number(e.target.id), 1);
        data.social = data.social.map((acc, index) => {
            return { ...acc, id: index };
        });
        this.setState({ socialDat: data.social });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editSocial !== this.props.editSocial) {
            this.setState({ data: data.social });
        }
    }
    render() {       
        const socArr = this.state.socialDat.map((handle) => {
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
