import { useState , useEffect} from "react"
import axios from "axios"
import LadderRow from "../components/LadderRow";
import NewsFormat from "../components/NewsFormat";


function Dashboard () {
    const [news, setNews] = useState(null)
    
    const getNews = () => {
        axios.request({
            url: '/news',
            method: 'get'
        }).then(response => {
            setNews(response.data.results)
        })
    }
    useEffect(()=> {
        getNews()
    },[])    


    return (
        <section>
            <div>
                {news && <NewsFormat data={news} />} 
            </div>
        </section>

    )
}

export default Dashboard