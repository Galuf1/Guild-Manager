import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

function GuildCreate ({user, guild}) {
    console.log('guild page guild', guild)
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/guild', {
            'name': event.target[0].value,
            'game': event.target[1].value,
            'faction': event.target[2].value,
            'server': event.target[3].value,
            'description_short': event.target[4].value,
            'description_full': event.target[5].value,
            'guild_master': user.user
            
        }).then((response) => {
            console.log('create Guild response')
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
                    <Form.Select id="gameSelect">
                        <option value="2" >World of Warcraft</option>
                        <option value="3">Runescape</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="factionControl">
                    <Form.Label>Faction</Form.Label>
                    <Form.Select id="factionSelect">
                        <option value="ALLIANCE">Alliance</option>
                        <option value="HORDE">Horde</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Server</Form.Label>
                    <Form.Select id="serverSelect">
                        <option value="AMNENNAR">Amnennar</option>
                        <option value="ASHBRINGER">Ashbringer</option>
                    </Form.Select>
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
                <Button variant="primary" type='submit'>
                    Submit
                </Button>                       
            </form>
            
        </section>
    )
}

export default GuildCreate