import React, { Component } from 'react';
import styled from 'styled-components';

import Person from './Person/Person';

import './App.css';

const StyledButton = styled.button`
    background-color: ${props => props.showPersons ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
    
    &:hover {
        background-color: ${props => props.showPersons ? 'salmon' : 'lightgreen'};;
        color: black;
    }
`;

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
                <StyledButton showPersons={this.state.showPersons} onClick={this.togglePersonHandler}>
                    Toggle Person
                </StyledButton>
                {persons}
            </div>
        );
    }
}

export default App;