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
        </section>
    )
}

export default HomePage