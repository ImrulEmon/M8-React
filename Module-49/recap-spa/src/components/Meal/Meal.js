import React from 'react';
import './Meal.css';
const Meal = (props) => {
    const{name,img,category}=props;
    return (
        <div className='meal'>
             <img className='meal-img' src={img} alt="" />
           <div>
           <h2>{name}</h2>
           <h4>{category}</h4>
           <button className='info-btn'>More Info</button>
           </div>
        </div>
    );
};

export default Meal;