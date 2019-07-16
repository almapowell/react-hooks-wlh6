import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsCharacters = () => {
    // create state
    const [characters, setCharacters] = useState([]);

    // useEffect to make an axios req on initial load
    useEffect(() => {
        axios.get('https://swapi.co/api/people/?page=1')
            .then(response => {
                const { results } = response.data;
                // set the characters from axios req onto state
                setCharacters(results)
            })
            .catch(error => {
                if(error) throw error;
            });
    }, [])

    // return jsx
    return (
        <div>
            {
                characters.map(char => (
                    <div>
                        {char.name}
                    </div>
                ))
            }
        </div>
    )
};

export default StarWarsCharacters;