/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMeals(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.log("Couldn't fetch meals:", error);
      return [];
    }
  }

  async function loadMealIdeas() {
    if (ingredient) {
      const mealData = await fetchMeals(ingredient.trim());
      setMeals(mealData);
    }
  }

  useEffect(() => {
    loadMealIdeas(); 
  }, [ingredient]);

  return (
    <div className="p-2 m-2 mb-3">
      <h2 className="text-3xl font-bold">Meal Ideas</h2>
      {!ingredient && <p className="text-xl">Select an item to see meal ideas</p>}
      {ingredient && meals.length === 0 && (
        <p className="text-xl">No meal ideas found for {ingredient}</p>
      )}
      {ingredient && meals.length > 0 && (
        <p className="text-xl">Here are meal ideas using {ingredient}:</p>
      )}
      <ul className="list-none p-0">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-3 m-1 max-w-auto h-auto bg-slate-900 text-lg hover:bg-slate-700 cursor-pointer"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
