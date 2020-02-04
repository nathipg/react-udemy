import React, { Component } from 'react';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.css';

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
        const personIndex = this.state.persons.findIndex(person => person.userid === id);
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
        let btnClass = '';

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name} 
                                age={person.age} 
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];

        if(this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if(this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hello, World!</h1>
                <p className={assignedClasses.join(' ')}>That's it</p>
                <button className={btnClass} onClick={this.togglePersonHandler}>
                    Toggle Person
                </button>
                {persons}
            </div>
        );
    }
}

export default App;