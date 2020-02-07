import React, { Component, Fragment } from 'react';

import Burguer from '../../components/Burger/Burger';

class BurguerBuilder extends Component {
    render() {
        return (
            <Fragment>
               <Burguer />
               <div>Build Controls</div>
            </Fragment>
        );
    }
}

export default BurguerBuilder;