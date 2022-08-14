import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage' 
import GuildPage from './pages/GuildPage'
import CharacterPage from './pages/CharacterPage'
import ApiPage from './pages/ApiPage'
import NewsPage from './pages/NewsPage'
import NavBar from './components/Navbar'


function App() {
    const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/guild' element={<GuildPage />} />
          <Route path='/char' element={<CharacterPage />} />
          <Route path='/api' element={<ApiPage />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
