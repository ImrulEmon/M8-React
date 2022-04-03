import React from 'react';
import './Country.css'
const spanStyle={
    color:'orange'
}
const spanStyle2={
    color:'green'
}
const Country = (props) => {
    return (
        <div>
            <h3>Country <span style={spanStyle2}>{props.name}</span></h3>
            <h4>Capital is <span style={spanStyle}>{props.cap}</span></h4>
            <h5>Population {props.population}</h5>
            <hr />
        </div>
    );
};

export default Country;