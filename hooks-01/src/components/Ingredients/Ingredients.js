import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
    const [ ingredients, setIngredients] = useState([]);

    useEffect(() => {
        console.log('RENDERING INGREDIENTS', ingredients);
    }, [ingredients]);

    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        setIngredients(filteredIngredients);
    }, []);

    const addIngredientHandler = ingredient => {
        fetch('https://react-hooks-update-20535.firebaseio.com/ingredients.json', {
            method: 'POST',
            body: JSON.stringify(ingredient),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            setIngredients(prevIngredients => [
                ...prevIngredients, 
                { id: responseData.name, ...ingredient }
            ]);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const removeIngredientHandler = ingredientId => {
        fetch(`https://react-hooks-update-20535.firebaseio.com/ingredients/${ingredientId}.json`, {
            method: 'DELETE'
        })
        .then(response => {
            setIngredients(prevIngredients => 
                prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
            );
        })
        .catch(error => {
            console.error(error);
        });
    };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
