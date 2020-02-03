import React from 'react';

import './UserInput.css';

const UserInput = props => {
    return (
        <div className="UserInput">
            <input type="text" value={props.value} onChange={props.change} onBlur={props.blur} />
        </div>
    );
};

export default UserInput;