import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] Cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2o useEffect');
        return () => {
            console.log('[Cockpit.js] 2o Cleanup work in useEffect');
        };
    });

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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>That's it</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
    );
};

export default React.memo(Cockpit);