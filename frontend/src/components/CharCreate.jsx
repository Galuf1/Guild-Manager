import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

function CharCreate ({user, char}) {
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/char', {
            'name': event.target[0].value,
            'faction': event.target[1].value,
            'spec': event.target[2].value,
            'server': event.target[3].value,
            'role': event.target[4].value,
            'guild':event.target[5].value,
            'game': event.target[6].value,
            'user': user.user
            
        }).then((response) => {
            console.log('create char', response)
            navigate('/')
        })
    }

    return (
        <section>
            <h1>Create a Character</h1>
            <form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="charName">
                    <Form.Label>Character Name</Form.Label>
                    <Form.Control type="text" placeholder="Character Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="factionControl">
                    <Form.Label>Faction</Form.Label>
                    <Form.Select id="factionSelect">
                        <option value="ALLIANCE">Alliance</option>
                        <option value="HORDE">Horde</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="specControl">
                    <Form.Label>Spec</Form.Label>
                    <Form.Select id="specSelect">
                        <option value="DPS">DPS</option>
                        <option value="TANK">Tank</option>
                        <option value="HEALER">Healer</option>
                        <option value="HYBRID">Hybrid</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="serverControl">
                    <Form.Label>Server</Form.Label>
                    <Form.Select id="serverSelect">
                        <option value="AMNENNAR">Amnennar</option>
                        <option value="ASHBRINGER">Ashbringer</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="roleControl">
                    <Form.Label>Role</Form.Label>
                    <Form.Select id="roleSelect">
                        <option value="DRUID">Druid</option>
                        <option value="HUNTER">Hunter</option>
                        <option value="MAGE">Mage</option>
                        <option value="PALADIN">Paladin</option>
                        <option value="PRIEST">Priest</option>
                        <option value="ROGUE">Rogue</option>
                        <option value="SHAMAN">Shaman</option>
                        <option value="WARLOCK">Warlock</option>
                        <option value="WARRIOR">Warrior</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="guildControl">
                    <Form.Label>Guild</Form.Label>
                    <Form.Control type='text' placeholder='Guild' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gameControl">
                    <Form.Label>Game</Form.Label>
                    <Form.Select id="gameSelect">
                        <option value="2" >World of Warcraft</option>
                        <option value="3">Runescape</option>
                    </Form.Select>
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

export default CharCreate