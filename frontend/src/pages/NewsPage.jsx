import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function NewsPage() {
    
    const gameSpot =() => {
        axios.request({
            url: "http://www.gamespot.com/api/games/",
            method: "get",
            params: {
            api_key: import.meta.env.VITE_api_key,
            name:'worldofwarcraft' 
            }
        }).then(response => {
            console.log(response)
        })
    }


    return (
        <section>
            <h1>Hello</h1>
            <Button onClick={gameSpot}>fetch news</Button>
        </section>
    )

}

export default NewsPage