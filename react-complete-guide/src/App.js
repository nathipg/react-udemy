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

    switchNameHandler = () => {
        this.setState({persons: [
            { name: 'Nathália Pissuti', age: 22},
            { name: 'Apollo', age: 9}
        ]});
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, World!</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm awesome</Person>
            </div>
        );
    }
}

export default App;
