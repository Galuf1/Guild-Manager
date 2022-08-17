import {Link} from 'react-router-dom'
import NavBar from '../components/Navbar'
import backimage from "../assets/background.jpg"
import logobig from '../assets/logo_transparent.png'
import React from 'react'

function HomePage ({user}) {

    return (
        <div>
            <section className='landingDiv' >
                <div id='logoWrapper'>
                    <img src={logobig} />
                </div>                
            </section>
        </div>
    )
}

export default HomePage