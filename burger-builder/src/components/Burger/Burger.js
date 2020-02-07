import React from 'react';
import BurguerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burguer = props => {
    const ingredientsList = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurguerIngredient key={key + i} type={key} />
            });
        });

    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {ingredientsList}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burguer;