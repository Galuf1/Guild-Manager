import { useState , useEffect} from "react"
import axios from "axios"
import LadderRow from "../components/LadderRow";
import NewsFormat from "../components/NewsFormat";


function Dashboard () {
    const [ladder, setLadder] = useState(null)
    const [news, setNews] = useState(null)
    
    const getLadder = () => {
        axios.request({
            url: '/leaderboard',
            method: 'get'
        }).then(response => {
            setLadder(response.data)
        })
    }
    
    const getNews = () => {
        axios.request({
            url: '/news',
            method: 'get'
        }).then(response => {
            setNews(response.data.results)
        })
    }
    useEffect(()=> {
            getLadder()
        },[])
    useEffect(()=> {
        getNews()
    },[])    


    return (
        <section>
            <div>
                {ladder && <LadderRow data={ladder} />}
            </div>
            <div>
                {news && <NewsFormat data={news} />} 
            </div>
        </section>

    )
}

export default Dashboard