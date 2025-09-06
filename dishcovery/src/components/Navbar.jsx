import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300">
        Dishcovery
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/search" className="hover:text-yellow-300 transition">Search</Link>
        <Link to="/favorites" className="hover:text-yellow-300 transition">Favorites</Link>
      </div>
    </nav>
  )
}