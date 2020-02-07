import React, { Component, Fragment } from 'react';

import Burguer from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
               <BuildControls />
            </Fragment>
        );
    }
}

export default BurguerBuilder;