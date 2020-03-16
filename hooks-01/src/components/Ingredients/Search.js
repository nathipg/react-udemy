import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    const { onLoadIngredients } = props;
    const [inputFilter, setInputFilter] = useState('');
    const inputFilterRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(inputFilter === inputFilterRef.current.value) {
                const query = inputFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${inputFilter}"`;

                fetch('https://react-hooks-update-20535.firebaseio.com/ingredients.json' + query)
                .then(response => {
                    return response.json();
                })
                .then(responseData => {
                    const loadedIngredients = [];

                    for(const key in responseData) {
                        loadedIngredients.push({
                            id: key,
                            title: responseData[key].title,
                            amount: responseData[key].amount
                        });
                    }

                    onLoadIngredients(loadedIngredients);
                })
                .catch(error => {
                    console.error(error);
                });
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [inputFilter, onLoadIngredients, inputFilterRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
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
