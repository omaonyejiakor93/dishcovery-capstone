// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("dishcovery_favorites");
    if (raw) setFavorites(JSON.parse(raw));
  }, []);

  function removeFav(id) {
    const filtered = favorites.filter((f) => f.idMeal !== id);
    setFavorites(filtered);
    localStorage.setItem("dishcovery_favorites", JSON.stringify(filtered));
  }

  if (!favorites || favorites.length === 0) {
    return (
      <div className="min-h-screen py-12 px-6">
        <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
        <p className="text-gray-600">No favorites yet. Save recipes to see them here.</p>
        <Link to="/" className="mt-4 inline-block text-green-600">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((r) => (
          <div key={r.idMeal} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={r.strMealThumb} alt={r.strMeal} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{r.strMeal}</h3>
              <p className="text-sm text-gray-500 mb-3">{r.strCategory || ""}</p>

              <div className="flex gap-2">
                <Link
                  to={`/recipe/${r.idMeal}`}
                  className="flex-1 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  View
                </Link>
                <button
                  onClick={() => removeFav(r.idMeal)}
                  className="px-3 py-2 border rounded text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}