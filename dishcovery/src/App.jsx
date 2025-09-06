// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import Copyright from "./pages/Copyright"; // ✅ import

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/copyright" element={<Copyright />} /> {/* ✅ new route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}