import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        originalUsername: 'nathipg',
        username: 'nathipg'
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    blurUsernameInput = (event) => {
        if(event.target.value === '') {
            this.setState({
                username: this.state.originalUsername
            });
        }
    };

    render() {
        return (
            <div className="App">
                <UserInput change={this.changeUsername} blur={this.blurUsernameInput} value={this.state.username} />
                <UserOutput className="UserOutput" p1="Texto 1" p2="Texto 2" username={this.state.username} />
            </div>
        );
    }
}

export default App;