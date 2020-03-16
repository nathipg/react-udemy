import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
    const [ ingredients, setIngredients] = useState([]);

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

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
