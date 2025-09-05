import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <p className="text-gray-600">No recipes found. Try another search.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((r) => (
        <RecipeCard key={r.idMeal} recipe={r} />
      ))}
    </div>
  )
}