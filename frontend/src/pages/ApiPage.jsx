import axios from "axios"
import Button from "react-bootstrap/esm/Button";
import {useEffect, useState} from 'react'
import LadderRow from "../components/LadderRow";




function ApiPage() {
    
    const [ladder, setLadder] = useState(null)
    const getLadder = () => {
        axios.request({
            url: '/leaderboard',
            method: 'get'
        }).then(response => {
            setLadder(response.data)
        })
    }
    useEffect(()=> {
            getLadder()
        },[])
   
    return (
        <section>
            {ladder && <LadderRow data={ladder} />}
        </section>
    )
}

export default ApiPage