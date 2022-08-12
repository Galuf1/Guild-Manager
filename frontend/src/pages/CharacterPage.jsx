import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

function CharacterPage ({user}) {

    let navigate = useNavigate()

    const handleSubmit = (event) => {
        axios.post('/char', {
            'name': event.target[0].value,
            'faction': event.target[1].value,
            'spec': event.target[2].value,
            'server': event.target[3].value,
            'role': event.target[4].value,
            'guild':event.target[5].value,
            'game': event.target[6].value
            
        }).then((response) => {
            console.log('wat you are in react')
            navigate('/')
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="charName">
                    <Form.Label>Character Name</Form.Label>
                    <Form.Control type="text" placeholder="Character Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="factionControl">
                    <Form.Label>Faction</Form.Label>
                    <Form.Control type="text" placeholder="Faction" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="specControl">
                    <Form.Label>Spec</Form.Label>
                    <Form.Control type="text" placeholder="Spec" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Server</Form.Label>
                    <Form.Control type="text" placeholder="Server" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="roleControl">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type='text' placeholder='Role' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="guildControl">
                    <Form.Label>Guild</Form.Label>
                    <Form.Control type='text' placeholder='Guild' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gameControl">
                    <Form.Label>Game</Form.Label>
                    <Form.Control type='text' placeholder='Game' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>                       
            </form>
            
        </section>
    )
}

export default CharacterPage