// src/pages/Search.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      // ...existing code...
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
// ...existing code...
      const data = await res.json();
      setResults(data.meals || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Recipes</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a meal..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-r hover:bg-green-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="text-center">Loading...</p>}
      {!loading && results.length === 0 && query && (
        <p className="text-center text-gray-500">No meals found.</p>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}`}
            className="block bg-white rounded shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
              <p className="text-sm text-gray-600">{meal.strCategory}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}