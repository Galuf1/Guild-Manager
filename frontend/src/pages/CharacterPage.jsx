import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import CharCreate from '../components/CharCreate'
import CharEdit from '../components/CharEdit'

function CharacterPage ({user,char}) {

    console.log('user in char', user)
    console.log('char in char', typeof char)


    return (
        <section>
            <CharCreate />
            {/* {{char} ? <CharEdit user={user} char={char}/> : <CharCreate user={user} char={char}/>}  */}
        </section>
    )
}

export default CharacterPage