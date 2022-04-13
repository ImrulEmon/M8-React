import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals]=useState([]);
    useState(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data=>{
            // console.log(data.meals);
            setMeals(data.meals);
        });
    },[])
    console.log(meals);
    return (
       <div className='meals'>
            <div className='meals-container'>
            <h2>Result : {meals.length}</h2>
            {
                meals.map(meal=><Meal
                key={meal.idMeal}
                name={meal.strMeal}
                img={meal.strMealThumb}
                category={meal.strCategory}
                ></Meal>)
            }
            </div>
            <div className='info-container'>
                <h3>Meal Info</h3>
            </div>
       </div>
    );
};

export default Meals;