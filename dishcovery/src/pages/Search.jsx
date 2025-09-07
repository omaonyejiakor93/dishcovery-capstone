// src/pages/Search.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error searching recipes:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Search Recipes</h1>

      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-8 flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p>Searching recipes...</p>}
      {!loading && recipes.length === 0 && query && (
        <p className="text-gray-500">No results found for "{query}".</p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              <p className="text-sm text-gray-500">
                {recipe.strArea} • {recipe.strCategory}
              </p>
              <Link
                to={`/recipe/${recipe.idMeal}`}
                className="mt-3 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}