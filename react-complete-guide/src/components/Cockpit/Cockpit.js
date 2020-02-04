import React from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
    const assignedClasses = [];
    let btnClass = '';

    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello, World!</h1>
            <p className={assignedClasses.join(' ')}>That's it</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
    );
};

export default Cockpit;