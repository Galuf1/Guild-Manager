import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';


function Logout({user, whoami}) {

    const submitLogout = function() {
        axios.post('/logout').then((response)=> {
            console.log('logout wat', response)
            whoami()
            window.location('/')
        })
    }

    return (
        <Button onClick={()=>submitLogout()}>Log Out</Button>
    )
}

export default Logout