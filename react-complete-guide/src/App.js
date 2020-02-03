import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Pissuti', age: 22},
            { name: 'Apollo', age: 9}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({persons: [
            { name: newName, age: 22},
            { name: 'Apollo', age: 9}
        ]});
    }

    nameChangeHandler = (event) => {
        this.setState({persons: [
            { name: event.target.value, age: 22},
            { name: 'Apollo', age: 9}
        ]});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hello, World!</h1>
                <button 
                    style={style}
                    onClick={() => this.switchNameHandler('Nathália Pissuti')}>
                    Switch name
                </button>
                <Person
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} 
                    click={this.switchNameHandler.bind(this, 'Nathália Pissuti')}
                    changed={this.nameChangeHandler}
                />
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}>
                    I'm awesome
                </Person>
            </div>
        );
    }
}

export default App;
