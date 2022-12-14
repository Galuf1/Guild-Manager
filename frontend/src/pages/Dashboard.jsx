import { useState , useEffect} from "react"
import axios from "axios"
import NewsFormat from "../components/NewsFormat";
import SideBar from "../components/Sidebar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Dashboard ({user, guild}) {
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
        <div>
        <section className="landingDiv">            
            <Container className="ms-0 me-0">
                <Row>
                    <Col>
                        <SideBar user={user} guild={guild}/>
                    </Col>
                    <Col>
                        {news && <NewsFormat data={news} />} 
                    </Col>
                </Row>                
            </Container>
        </section>
        </div>
    )
}

export default Dashboard