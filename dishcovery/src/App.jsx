import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Placeholder pages
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
// We will add these later
// import Favorites from "./pages/Favorites";
// import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always at top */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            {/* Uncomment later when we create these pages */}
            {/* <Route path="/favorites" element={<Favorites />} /> */}
            {/* <Route path="/search" element={<Search />} /> */}
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;