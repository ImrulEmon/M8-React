import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

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
        <div>
            <h2>Result : {meals.length}</h2>
            {
                meals.map(meal=><Meal
                key={meal.idMeal}
                name={meal.strMeal}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;