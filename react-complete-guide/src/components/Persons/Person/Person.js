import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // this.lastPerson.focus();
        this.inputRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    // ref={(e) => {this.lastPerson = e}}
                    ref={this.inputRef}
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </div>
        );
    }
}

Person.propTypes = {
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string
};

export default Person;