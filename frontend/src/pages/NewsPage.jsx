import axios from "axios";
import { useState , useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import NewsFormat from "../components/NewsFormat";

function NewsPage() {
    const [news, setNews] = useState(null)

    const newsGet = () => {
        axios.request({
            url:'/news',
            method:'get'
        }).then((response)=> {
            setNews(response.data.results)
        })
    }
    useEffect(()=> {
        newsGet()
    },[])

   


    return (
        <section>
            {news && <NewsFormat data={news} />}            
        </section>
    )

}

export default NewsPage