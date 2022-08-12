import {Link} from 'react-router-dom'

function HomePage ({user}) {


    return (
        <section>
            <h1>Guild Manager</h1>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
            <br />
            <Link to="/guild">Guild</Link>
            <br />
            <Link to="/char">Char</Link>
            <br />
            <Link to="/api">Api</Link>
            <br />
            <Link to="/news">News</Link>
        </section>
    )
}

export default HomePage