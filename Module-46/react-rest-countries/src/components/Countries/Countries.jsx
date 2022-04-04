import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        
        <div>
           <h1>Hello !!{countries.length}</h1>
           <div  className='countries-container'>
           {
                countries.map(country => <Country key={country.capital} country={country} name={country.name.common} cap={country.capital} population={country.population}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;