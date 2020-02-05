import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'qwe', name: 'Pissuti', age: 22},
            { id: 'asd', name: 'Apollo', age: 9},
            { id: 'zxc', name: 'Jô', age: 1 }
        ],
        showPersons: false
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[App.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
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
        console.log('[App.js] render');
        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons} 
                clicked={this.deletePersonHandler} 
                changed={this.nameChangeHandler}
            />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;