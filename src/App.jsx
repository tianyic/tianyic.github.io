import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import './App.css'

function App() {
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
          {/* <p className="visitor-counter">
            <img 
              src="https://visitor-badge.laobi.icu/badge?page_id=tianyic.github.io" 
              alt="Visitors"
              style={{ verticalAlign: 'middle', marginLeft: '5px' }}
            />
          </p> */}
        </footer>
      </main>
    </div>
  )
}

export default App
