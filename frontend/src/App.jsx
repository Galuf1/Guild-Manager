import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/Navbar'
import GetCookie from './components/GetCookie'

import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage' 
import GuildPage from './pages/GuildPage'
import CharacterPage from './pages/CharacterPage'
import ApiPage from './pages/ApiPage'
import NewsPage from './pages/NewsPage'
import Dashboard from './pages/Dashboard'

const csrftoken = GetCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken'] = csrftoken

function App() {
    const [user, setUser] = useState(null)
    
    const whoAmI = async () => {
      const response = await axios.get('/whoami')
      console.log(response.data)
      const newUser = response.data && response.data.email
      if (response.data.user==='True') {
        console.log(response)
        setUser(newUser)
      }
      
    }

  useEffect(()=> {
    whoAmI()
  },[])  

  return (
    <div className="App">
      {user && <p>welcome, {user.email}</p>}
      <NavBar whoami={whoAmI} user={user}  />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser}/>} />
          <Route path="/signup" element={<SignupPage user={user} setUser={setUser}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/guild' element={<GuildPage />} />
          <Route path='/char' element={<CharacterPage />} />
          <Route path='/api' element={<ApiPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
