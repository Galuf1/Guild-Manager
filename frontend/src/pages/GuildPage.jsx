import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import GuildCreate from '../components/GuildCreate'
import GuildEdit from '../components/GuildEdit'

function GuildPage ({user, guild}) {
   const user_logged = user
    const empty = guild
    return (

        <section>
            {user_logged ? (empty ? <GuildEdit user={user} guild={guild}/> : <GuildCreate user={user} guild={guild}/>) 
            : <h1>Please Log In</h1>
              }           
        </section>
    )
}

export default GuildPage