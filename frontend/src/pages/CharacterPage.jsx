import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import CharCreate from '../components/CharCreate'
import CharEdit from '../components/CharEdit'

function CharacterPage ({user,char}) {

    const user_logged = user
    const empty = char

    return (
        <section>
            {user_logged ? (empty ? <CharEdit user={user} char={char}/> : <CharCreate user={user} char={char}/>) : <h1>Please Log in</h1> 
        

            }
        </section>
    )
}

export default CharacterPage