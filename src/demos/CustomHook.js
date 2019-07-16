import React, { useState, useEffect } from 'react';
import axios from 'axios';

// create a custom hook with default params to handle use cases
const useAxios = (url, method = 'get', body = null, initialData = []) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios(url, {
            method,
            body
        }).then(response => {
            setData(response.data);
        })
        // if the url or method changes, recall the effect
    }, [url, method, body])

    return data
};

// component using the custom hook
const CharacterContainer = () => {
    const data = useAxios("https://swapi.co/api/people/?page=1", "get")
    return (
        <div>
            {
                data.results ?
                data.results.map(val => {
                    return <h1 key={val.name}>{val.name}</h1>;
                })
                :
                null
            }
        </div>
    );
};

export default CharacterContainer;

// Have Students get in groups and study these
// useDebugValue
// useReducer
// useContext
// useCallback
// useRef