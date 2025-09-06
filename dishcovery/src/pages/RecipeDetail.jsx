// src/pages/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await fetch(
          https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
        );
        const data = await res.json();
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        }
      } catch (err) {
        console.error("Error fetching meal:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMeal();
  }, [id]);

  function addToFavorites() {
    if (!meal) return;
    const raw = localStorage.getItem("dishcovery_favorites");
    const arr = raw ? JSON.parse(raw) : [];
    const exists = arr.find((x) => x.idMeal === meal.idMeal);
    if (!exists) {
      arr.unshift({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        strCategory: meal.strCategory,
      });
      localStorage.setItem("dishcovery_favorites", JSON.stringify(arr));
    }
    alert("Recipe added to favorites!");
  }

  if (loading) return <p className="p-6">Loading...</p>;
  if (!meal) return <p className="p-6">Recipe not found.</p>;

  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-80 object-cover rounded mb-6"
      />

      <p className="text-gray-700 mb-4">
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Area:</strong> {meal.strArea}
      </p>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">{meal.strInstructions}</p>

      <button
        onClick={addToFavorites}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
      >
        Add to Favorites
      </button>
    </div>
  );
}