// import React, { useContext } from 'react';
// import { Context } from '../../Context/CountryContext';
// import { Link } from 'react-router-dom';
import './country.css';

const Country = ({country}) => {
    // const {country: {name, flags, capital, population  }} = useContext(Context);
    const {name, flags, capital, population  }= country;
    return (
        <>
        <div className='country'>
            {/* <h1>Countries</h1> */}
            <img className='image' src={flags.png} alt=""/>
            <h2>Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h6>Population: {population}</h6>   
              
        </div>
        </>
    );
};

export default Country;