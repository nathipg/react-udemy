import React, { Component, Fragment } from 'react';

import Burguer from '../../components/Burger/Burger';

class BurguerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Fragment>
               <Burguer ingredients={this.state.ingredients} />
               <div>Build Controls</div>
            </Fragment>
        );
    }
}

export default BurguerBuilder;