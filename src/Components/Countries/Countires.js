import React, { useContext, useState } from 'react';
import { Context } from '../../Context/CountryContext';
import Country from '../Country/Country';
import './countries.css';

const Countires = () => {
    const { state: { countries, loading, error } } = useContext(Context);
    console.log(countries);

    const [query, setQuery] = useState('');
    let content;

    if (loading) {
        content = <h1>Content is loading......</h1>
    }
    if (error) {
        content = <h1>Fetching error</h1>
    }

    if (!loading && !error && countries.length) {
        content = countries.filter(country => {
            return query.toLowerCase() === "" ? country : country.name.common.toLowerCase().includes(query);
        }).map((country) => <Country country={country} />)
    }
    // if (!loading && !error && countries.length) {
    //     content = countries.filter(country => {
    //         return searchText.toLowerCase() === "" ? country : country.name.common.toLowerCase().includes(searchText);
    //     }).map((country) => <Country country={country} />)


    // console.log(loading);

    return (
        < div>
            <div className='input'>
                <input className='input_field' type="text" placeholder='search for your country' onChange={(e) => setQuery(e.target.value)} />
                <label className='search'>Search</label>
            </div>



            <div className='display'>
                {
                    content
                }
            </div>
        </div>
    );
};

export default Countires;