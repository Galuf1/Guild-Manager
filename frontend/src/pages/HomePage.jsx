import {Link} from 'react-router-dom'
import NavBar from '../components/Navbar'
import backimage from "../assets/background.jpg"
import React from 'react'

function HomePage ({user}) {


    return (
        <div>
            {/* <NavBar /> */}
            <section className='landingDiv' style={{backgroundImage: `url(${backimage})`}}>            
                <h1>Guild Manager</h1>
                <Link to="/guild">Guild</Link>
                <br />
                <Link to="/char">Char</Link>
                <br />
                <Link to="/api">Api</Link>
                <br />
                <Link to="/news">News</Link>
            </section>
        </div>
    )
}

export default HomePage