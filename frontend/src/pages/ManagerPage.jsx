import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

function ManagerPage ({user}) {

    let navigate = useNavigate()

    const handleSubmit = (event) => {
        axios.post('/guild', {
            'name': event.target[0].value,
            // 'game': event.target[1].value,
            'faction': event.target[2].value,
            'server': event.target[3].value,
            'description_short': event.target[4].value,
            'description_full': event.target[5].value
            
        }).then((response) => {
            console.log('wat you are in react')
            navigate('/')
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="guildName">
                    <Form.Label>Guild Name</Form.Label>
                    <Form.Control type="text" placeholder="Guild Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="gameControl">
                    <Form.Label>Game</Form.Label>
                    <Form.Control type="text" placeholder="game" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="factionControl">
                    <Form.Label>Faction</Form.Label>
                    <Form.Control type="text" placeholder="faction" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Server</Form.Label>
                    <Form.Control type="text" placeholder="server" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Full Description</Form.Label>
                    <Form.Control as="textarea" rows={4} />
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

export default ManagerPage