import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';


export const Context = createContext();

const CountryContext = ({ children }) => {
    const initialState = {
        countries: [],
        loading: false,
        error: false,

    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'AXIOS_LOADING':
                return {
                    ...state,
                    loading: true,
                    error: false
                };
            case 'AXIOS_SUCCESS':
                return {
                    ...state,
                    loading: false,
                    countries: action.payload
                };
            case 'AXIOS_ERROR':
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            default:
                return state;
        }
    }



    useEffect(() => {
        dispatch({ type: 'AXIOS_LOADING' });
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => dispatch({ type: 'AXIOS_SUCCESS', payload: res.data }))
            .catch((err) => dispatch({ type: 'AXIOS_ERROR' }));


    }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default CountryContext;