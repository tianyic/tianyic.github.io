import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import './App.css'

function App() {
  const [visitorCount, setVisitorCount] = useState(null)
  const BASE_VISITOR_COUNT = 915 // Initial visitor count base

  useEffect(() => {
    // Fetch and increment visitor count using CountAPI
    fetch('https://api.countapi.xyz/hit/tianyic.github.io/visits')
      .then(res => {
        console.log('API Response status:', res.status)
        return res.json()
      })
      .then(data => {
        console.log('API Response data:', data)
        setVisitorCount(data.value + BASE_VISITOR_COUNT)
      })
      .catch(err => {
        console.error('Counter error:', err)
        // Set a fallback value if API fails
        setVisitorCount(BASE_VISITOR_COUNT)
      })
  }, [])

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-title">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Tianyi Chen
            </Link>
          </h1>
          <div className="nav-links">
            <Link to="/">About</Link>
            <a href="/#publications">Publications</a>
            <Link to="/blogs">Blogs</Link>
          </div>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <footer>
          <p>© 2026 Tianyi Chen. All rights reserved. Last update: Feb 11, 2026.</p>
          {visitorCount !== null && (
            <p className="visitor-counter">
              Visitors: {visitorCount.toLocaleString()}
            </p>
          )}
        </footer>
      </main>
    </div>
  )
}

export default App
