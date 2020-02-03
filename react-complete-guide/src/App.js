import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Pissuti', age: 22},
            { name: 'Apollo', age: 9}
        ]
    });
    const [ otherState, setOtherState ] = useState('other value');

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Nathália Pissuti', age: 22 },
                { name: 'Apollo', age: 9 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hello, World!</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState[0].name} age={personsState[0].age} />
            <Person name={personsState[1].name} age={personsState[1].age}>I'm awesome</Person>
        </div>
    );
}

export default App;