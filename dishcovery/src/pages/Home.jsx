export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Discover Delicious Recipes 🍲
        </h1>
        <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
          Find recipes tailored to your taste, save your favorites, and make cooking fun again.
        </p>
        <a
          href="/search"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow hover:bg-gray-200 transition"
        >
          Search Recipes
        </a>
      </section>

      {/* Featured Recipes Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?pasta"
              alt="Recipe 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Creamy Pasta</h3>
              <p className="text-gray-600">A quick and tasty Italian classic.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?salad"
              alt="Recipe 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Fresh Salad</h3>
              <p className="text-gray-600">Healthy and refreshing greens.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?soup"
              alt="Recipe 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Hearty Soup</h3>
              <p className="text-gray-600">Warm and comforting for any day.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}