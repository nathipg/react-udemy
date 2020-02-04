import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: 'qwe', name: 'Pissuti', age: 22},
            { id: 'asd', name: 'Apollo', age: 9},
            { id: 'zxc', name: 'Jô', age: 1 }
        ],
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    }

    render() {
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age} 
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );
        }

        const classes = [];

        if(this.state.persons.length <= 2) {
            classes.push('red');
        }

        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hello, World!</h1>
                <p className={classes.join(' ')}>That's it</p>
                <button className="button" showPersons={this.state.showPersons} onClick={this.togglePersonHandler}>
                    Toggle Person
                </button>
                {persons}
            </div>
        );
    }
}

export default App;