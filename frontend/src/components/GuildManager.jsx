import axios from 'axios'
import {Link} from 'react-router-dom'

function GuildManager ({user ,guild}) {
    
    let navigate = useNavigate()

    const handleCreate = (event) => {
        event.preventDefault()
        axios.post('/guild', {
            'name': event.target[0].value,
            'game': event.target[1].value,
            'faction': event.target[2].value,
            'server': event.target[3].value,
            'description_short': event.target[4].value,
            'description_full': event.target[5].value
            
        }).then((response) => {
            console.log('create guild response', response)
            navigate('/dashboard')
        })
    }

    const handleEdit = (event) => {
        event.preventDefault()
        axios.put('/guild', {
            'name': event.target[0].value,
            'game': event.target[1].value,
            'faction': event.target[2].value,
            'server': event.target[3].value,
            'description_short': event.target[4].value,
            'description_full': event.target[5].value
            
        }).then((response) => {
            console.log('edit guild response', response )
            navigate('/dashboard')
        })
    }

    

    return (
        {
            if(user) {
                getGuild()
            }
        }
    )
}

export default GuildManager