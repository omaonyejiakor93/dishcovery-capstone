// src/pages/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        // ...existing code...
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
// ...existing code...
        const data = await res.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading recipe...</p>;
  }

  if (!recipe) {
    return (
      <div className="text-center py-20">
        <p className="mb-4 text-gray-600">Recipe not found.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="text-green-600 font-medium hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <p className="text-gray-500 mb-6">
        {recipe.strArea} • {recipe.strCategory}
      </p>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-80 object-cover rounded-lg shadow mb-8"
      />

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
        {recipe.strInstructions}
      </p>

      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((num) => {
            const ingredient = recipe[`strIngredient${num}`];
            const measure = recipe[`strMeasure${num}`];
            // ...existing code...
            return ingredient && ingredient.trim()
              ? `${ingredient} - ${measure}`
              : null;
// ...existing code...
          })
          .filter(Boolean)
          .map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
      </ul>
    </div>
  );
}