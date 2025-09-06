// src/pages/Search.jsx
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder logic – later we’ll connect it to the API
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    setResults([
      { id: 1, title: "Spaghetti Bolognese", image: "https://via.placeholder.com/150" },
      { id: 2, title: "Chicken Curry", image: "https://via.placeholder.com/150" },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Search Recipes</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex justify-center mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      {results.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found. Try another search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;