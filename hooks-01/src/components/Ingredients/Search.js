import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';
import './Search.css';

const Search = React.memo(props => {
    const { onLoadIngredients } = props;
    const [inputFilter, setInputFilter] = useState('');
    const inputFilterRef = useRef();
    const { loading, data, error, sendRequest, clear } = useHttp();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputFilter === inputFilterRef.current.value) {
                const query = inputFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${inputFilter}"`;

                sendRequest(
                    'https://react-hooks-update-20535.firebaseio.com/ingredients.json' + query,
                    'GET'
                );
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [inputFilter, inputFilterRef, sendRequest]);

    useEffect(() => {
        if (!loading && !error && data) {
            const loadedIngredients = [];

            for (const key in data) {
                loadedIngredients.push({
                    id: key,
                    title: data[key].title,
                    amount: data[key].amount
                });
            }

            onLoadIngredients(loadedIngredients);
        }
    }, [data, loading, error, onLoadIngredients]);

    return (
        <section className="search">
            {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    {loading && <span>Loading...</span>}
                    <input
                        ref={inputFilterRef}
                        type="text"
                        value={inputFilter}
                        onChange={(event) => setInputFilter(event.target.value)} />
                </div>
            </Card>
        </section>
    );
});

export default Search;
