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
          <p className="visitor-counter">
            <img 
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftianyic.github.io&count_bg=%232C5F8D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=false" 
              alt="Visitors"
              style={{ display: 'inline-block' }}
            />
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
