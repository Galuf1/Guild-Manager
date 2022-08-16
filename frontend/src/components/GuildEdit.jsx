import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

function GuildPage ({user, guild}) {
    console.log('guild page guild', guild)
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put('/guild', {
            'name': event.target[0].value,
            'game': event.target[1].value,
            'faction': event.target[2].value,
            'server': event.target[3].value,
            'description_short': event.target[4].value,
            'description_full': event.target[5].value,
            'guild_master': user.user,
            'guild_id': guild.id
            
        }).then((response) => {
            console.log('wat you are in react')
            navigate('/')
        })
    }

    return (

        <section>
            <form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="guildName">
                    <Form.Label>Guild Name: {guild.name}</Form.Label>
                    <Form.Control type="text" placeholder="Guild Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="gameControl">
                    <Form.Label>Game</Form.Label>
                    <Form.Select id="gameSelect">
                        <option value="2" >World of Warcraft</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="factionControl">
                    <Form.Label>Faction: {guild.faction}</Form.Label>
                    <Form.Select id="factionSelect">
                        <option value="ALLIANCE">Alliance</option>
                        <option value="HORDE">Horde</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Server: {guild.server}</Form.Label>
                    <Form.Select id="serverSelect">
                        <option value="AMNENNAR">Amnennar</option>
                        <option value="ASHBRINGER">Ashbringer</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                    <Form.Label>{guild.description_short}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Full Description</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                    <Form.Label>{guild.description_full}</Form.Label>
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

export default GuildPage