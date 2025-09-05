import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeList from '../components/RecipeList'
import { searchMeals } from '../api/meals'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch(query, mode = 'name') {
    try {
      setLoading(true)
      setError('')
      const data = await searchMeals(query, mode) // returns [] or array
      setRecipes(data)
    } catch (err) {
      setError('Failed to fetch recipes. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dishcovery</h1>
        <div className="text-sm text-gray-600">Logo / Nav</div>
      </header>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Discover recipes</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <RecipeList recipes={recipes} />
    </div>
  )
}