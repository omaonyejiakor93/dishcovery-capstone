// simple wrapper around theMealDB public endpoints
const BASE = 'https://www.themealdb.com/api/json/v1/1'

export async function searchMeals(query, mode = 'name') {
  // mode: 'name' -> search.php?s=..., 'ingredient' -> filter.php?i=...
  try {
    if (mode === 'name') {
      const res = await fetch(`${BASE}/search.php?s=${encodeURIComponent(query)}`)
      const json = await res.json()
      return json.meals || []
    } else {
      // filter by ingredient returns basic meal info (id, name, thumb)
      const res = await fetch(`${BASE}/filter.php?i=${encodeURIComponent(query)}`)
      const json = await res.json()
      return json.meals || []
    }
  } catch (err) {
    console.error('API error', err)
    throw err
  }
}

export async function lookupMeal(id) {
  try {
    const res = await fetch(`${BASE}/lookup.php?i=${id}`)
    const json = await res.json()
    return json.meals ? json.meals[0] : null
  } catch (err) {
    console.error('lookup error', err)
    throw err
  }
}