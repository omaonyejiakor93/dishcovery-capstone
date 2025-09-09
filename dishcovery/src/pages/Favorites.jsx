// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Favorites</h1>

      {favorites && favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 truncate">
                  {recipe.strMeal}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {recipe.strArea} • {recipe.strCategory}
                </p>
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="text-green-600 font-medium hover:underline"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="mb-6">No favorites yet. Save a recipe to see them here!</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}