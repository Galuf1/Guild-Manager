import {Link} from 'react-router-dom'
import NavBar from '../components/Navbar'
import backimage from "../assets/background.jpg"
import React from 'react'

function HomePage ({user}) {


    return (
        <div>
            <section className='landingDiv' style={{backgroundImage: `url(${backimage})`}}>            
                <h1>Guild Manager</h1>
                {user
                ? <h2>Hello {user}</h2>
                : <Link to="/signup">LINK</Link>}
            </section>
        </div>
    )
}

export default HomePage