import React from 'react'
import data from '../data';

function FullName(props) {
    return (
        <div>
            <span className="full-name">
                {`${data.name.first} ${data.name.last}`}
            </span>
            
            <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={props.editName}
            ></i>
        </div>
    )
}

export default FullName