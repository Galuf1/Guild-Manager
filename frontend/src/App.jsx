import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage' 
import ManagerPage from './pages/ManagerPage'


function App() {
    const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/guild' element={<ManagerPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
