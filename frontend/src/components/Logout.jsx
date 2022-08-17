import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'


function Logout({user, whoami}) {

    const submitLogout = function() {
        axios.post('/logout').then((response)=> {
            console.log('logout wat', response)
            window.location = '/'
            window.location.reload()
        })
    }

    return (
        <Button onClick={()=>submitLogout()}>Log Out</Button>
    )
}

export default Logout