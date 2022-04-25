import React from 'react';
import data from '../data';

function Summary() {
    return (
        <div className="info-box">
            <div className="info-extra">{data.summary}</div>
        </div>
    )
}

export default Summary;
