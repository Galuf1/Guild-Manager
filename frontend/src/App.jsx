import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage' 


function App() {
    const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
