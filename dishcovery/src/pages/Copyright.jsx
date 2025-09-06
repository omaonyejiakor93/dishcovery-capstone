// src/pages/Copyright.jsx
import React from "react";

export default function Copyright() {
  return (
    <div className="min-h-screen py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Copyright & Terms</h1>

      <p className="text-gray-700 mb-4">
        © {new Date().getFullYear()} Dishcovery. All rights reserved.
      </p>

      <p className="text-gray-700 mb-4">
        The content, recipes, and design of this website are provided for
        personal, non-commercial use only. Unauthorized reproduction,
        distribution, or modification of the content is strictly prohibited.
      </p>

      <p className="text-gray-700 mb-4">
        Recipe information is fetched from{" "}
        <a
          href="https://www.themealdb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          TheMealDB API
        </a>
        . We do not claim ownership of the recipes provided through the API.
      </p>

      <p className="text-gray-700">
        By using this site, you agree to respect these terms and conditions.
      </p>
    </div>
  );
}