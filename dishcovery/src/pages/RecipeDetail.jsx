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
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
     );
        const data = await res.json();
        if (data.meals) {
          setRecipe(data.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading recipe details...</p>;
  }

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  // Parse ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
  `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
);
    }
  }

  // Extract YouTube video
  const youtubeUrl = recipe.strYoutube;
  let youtubeEmbed = null;
  if (youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1];
    youtubeEmbed = `https://www.youtube.com/embed/${videoId}`;
  }

  // Add to Favorites
  const handleAddToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((fav) => fav.idMeal === recipe.idMeal);
    if (!exists) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${recipe.strMeal} added to favorites!`);
    } else {
      alert("This recipe is already in your favorites!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full md:w-2/3 h-64 object-cover rounded mb-6 shadow"
      />

      {/* Add to Favorites Button */}
      <button
        onClick={handleAddToFavorites}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6 hover:bg-green-700"
      >
        Add to Favorites
      </button>

      <h2 className="text-xl font-semibold mb-2">Category</h2>
      <p className="mb-4">
        {recipe.strCategory} ({recipe.strArea})
      </p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="mb-6 whitespace-pre-line">{recipe.strInstructions}</p>

      {youtubeEmbed && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
          <iframe
            width="100%"
            height="400"
            src={youtubeEmbed}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className="rounded shadow"
          ></iframe>
        </div>
      )}
    </div>
  );
}