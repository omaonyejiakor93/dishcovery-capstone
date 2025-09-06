import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"
import Favorites from "./pages/Favorites"
import Search from "./pages/Search"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Temporary Preview Section */}
      <div className="text-center py-10 text-gray-700">
        <h1 className="text-3xl font-bold">Welcome to Dishcovery 🍲</h1>
        <p className="mt-3 text-lg">Your Navbar is working! 🚀</p>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App