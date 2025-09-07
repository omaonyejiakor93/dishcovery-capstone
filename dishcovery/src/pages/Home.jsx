// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes starting with "c" just for demo
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Find the best recipes for every occasion, save your favorites, and
          explore step-by-step cooking guides.
        </p>
        <Link
          to="/search"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Start Exploring
        </Link>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Featured Recipes
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.length > 0 ? (
            recipes.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="recipe-img"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {meal.strMeal}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {meal.strCategory} • {meal.strArea}
                  </p>
                  <Link
                    to={`/recipe/${meal.idMeal}`}
                    className="mt-3 inline-block text-green-600 font-medium hover:underline"
                  >
                    View Recipe →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Loading recipes...
            </p>
          )}
        </div>
      </section>
    </div>
  );
}