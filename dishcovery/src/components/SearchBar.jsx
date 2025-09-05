import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState('name') // 'name' or 'ingredient'

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim(), mode)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes by ingredient or dish name"
          className="flex-1 p-3 border rounded-md focus:outline-none"
        />
        <button className="bg-orange-500 text-white px-4 rounded-md">Search</button>
      </div>

      <div className="mt-2 text-sm flex gap-4 items-center">
        <label className="flex items-center gap-1">
          <input type="radio" checked={mode === 'name'} onChange={() => setMode('name')} />
          <span className="ml-1">By name</span>
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" checked={mode === 'ingredient'} onChange={() => setMode('ingredient')} />
          <span className="ml-1">By ingredient</span>
        </label>
      </div>
    </form>
  )
}