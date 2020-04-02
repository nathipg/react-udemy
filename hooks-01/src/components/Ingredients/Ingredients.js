import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case 'SET':
            return action.ingredients;
        case 'ADD':
            return [...currentIngredients, action.ingredient]
        case 'DELETE':
            return currentIngredients.filter(ing => ing.id !== action.id);
        default:
            throw new Error('Should not get here!');
    }
};

const Ingredients = () => {
    const [ingredients, dispatch] = useReducer(ingredientReducer, []);
    const { loading, error, data, extra, identifier, sendRequest, clear } = useHttp();

    useEffect(() => {
        if(!loading && !error) {
            switch(identifier) {
                case 'ADD_INGREDIENT':
                    dispatch({
                        type: 'ADD',
                        ingredient: {
                            id: data.name,
                            ...extra
                        }
                    });
                    break;
                case 'REMOVE_INGREDIENT':
                    dispatch({
                        type: 'DELETE',
                        id: extra
                    });
                    break;
                default:
                    break;
            }
        }
    }, [data, extra, identifier, loading, error]);

    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        dispatch({
            type: 'SET',
            ingredients: filteredIngredients
        });
    }, []);

    const addIngredientHandler = useCallback(ingredient => {
        sendRequest(
            'https://react-hooks-update-20535.firebaseio.com/ingredients.json',
            'POST',
            JSON.stringify(ingredient),
            ingredient,
            'ADD_INGREDIENT'
        );
    }, [sendRequest]);

    const removeIngredientHandler = useCallback(ingredientId => {
        sendRequest(
            `https://react-hooks-update-20535.firebaseio.com/ingredients/${ingredientId}.json`,
            'DELETE',
            null,
            ingredientId,
            'REMOVE_INGREDIENT'
        );
    }, [sendRequest]);

    const ingredientList = useMemo(() => {
        return (
            <IngredientList 
                ingredients={ingredients} 
                onRemoveItem={removeIngredientHandler} />
        );
    }, [ingredients, removeIngredientHandler]);

    return (
        <div className="App">
            {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={loading} />

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler} />
                {ingredientList}
            </section>
        </div>
    );
}

export default Ingredients;
