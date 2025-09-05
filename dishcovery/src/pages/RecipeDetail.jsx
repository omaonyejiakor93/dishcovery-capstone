import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { lookupMeal } from '../api/meals'

function getIngredients(meal) {
  const list = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ing && ing.trim()) list.push(`${measure ? measure + ' ' : ''}${ing}`)
  }
  return list
}

export default function RecipeDetail() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      const result = await lookupMeal(id)
      if (mounted) setMeal(result)
      setLoading(false)
    }
    load()
    return () => (mounted = false)
  }, [id])

  if (loading) return <p className="p-4">Loading...</p>
  if (!meal) return <p className="p-4">Recipe not found.</p>

  const ingredients = getIngredients(meal)

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/" className="text-blue-600">← Back</Link>
      <h1 className="text-3xl font-bold my-4">{meal.strMeal}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded" />
        <div>
          <h3 className="font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc ml-5 mb-4">
            {ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
          <p><strong>Category:</strong> {meal.strCategory} • <strong>Area:</strong> {meal.strArea}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Instructions</h3>
        <p className="whitespace-pre-line">{meal.strInstructions}</p>
      </div>
    </div>
  )
}