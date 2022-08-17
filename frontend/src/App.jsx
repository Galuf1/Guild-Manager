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
    const [user, setUser] = useState({})
    const [guild, setGuild] = useState({})
    const [char, setChar] = useState({})
    
    const whoAmI = async () => {
      const response = await axios.get('/whoami')
      const newUser = {'user':response.data.user, 'email': response.data.email}
      if (response.data.user) {
        setUser(newUser)
      } else {
        setUser(false)
      }
      
    }

  useEffect(()=> {
    whoAmI()
  },[]) 
  
  const getGuild = (currentid) => {
    axios.get('/guild', {
    }).then((response)=> {
        setGuild(response.data)
    })
  }

  useEffect (()=> {
      getGuild()
  },[]) 

  const getChar = (currentid) => {
    axios.get('/char', {
    }).then((response)=> {
        // console.log('get char response',response)
        setChar(response.data)
    })
  }
  useEffect (()=> {
    getChar()
  },[]) 

  return (
    <div className="App">
      <NavBar whoami={whoAmI} user={user}  />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser}/>} />
          <Route path="/signup" element={<SignupPage user={user.email} setUser={setUser}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/guild' element={<GuildPage user={user} guild={guild}/>} />
          <Route path='/char' element={<CharacterPage user={user} char={char}/>} />
          <Route path='/api' element={<ApiPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/dashboard' element={<Dashboard user={user} guild={guild}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
