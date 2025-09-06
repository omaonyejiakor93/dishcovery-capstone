// src/pages/RecipeDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  // Placeholder data – later we’ll connect this to an API
  const recipe = {
    id,
    title: "Spaghetti Bolognese",
    image: "https://via.placeholder.com/600x400",
    ingredients: [
      "200g Spaghetti",
      "100g Ground Beef",
      "1 Onion",
      "2 Garlic Cloves",
      "400g Tomatoes",
      "Salt & Pepper to taste",
    ],
    instructions: [
      "Boil pasta until al dente.",
      "Cook beef with onion and garlic.",
      "Add tomatoes and simmer.",
      "Mix pasta with sauce and serve hot.",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          {/* Ingredients */}
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Instructions */}
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* Favorite Button */}
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;