import React from 'react';

import './UserOutput.css';

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <h1>{props.username}</h1>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
};

export default UserOutput;