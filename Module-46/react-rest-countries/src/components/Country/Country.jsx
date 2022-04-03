import React from 'react';
import './Country.css'
const spanStyle={
    color:'orange'
}
const spanStyle2={
    color:'white'
}
const Country = (props) => {
    const {official}=props.country.name;
    return (
        <div className='country'>
            <h3>Country <span style={spanStyle2}>{props.name}</span></h3>
            <h4>Capital is <span style={spanStyle}>{props.cap}</span></h4>
            <h5>Population {props.population}</h5>
            <p style={{color:'white'}}>{props.country.continents}</p>
            <p style={{color:'goldenrod'}}>{official}</p>
            <img src={props.country.flags.svg} alt="" />
        </div>
    );
};

export default Country;