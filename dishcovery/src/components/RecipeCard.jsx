import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  // the filter.php result and search.php result both provide idMeal, strMeal, strMealThumb
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-500">{recipe.strCategory || ''}</p>
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="inline-block mt-3 bg-orange-500 text-white px-3 py-1 rounded-md"
        >
          View Recipe
        </Link>
      </div>
    </div>
  )
}