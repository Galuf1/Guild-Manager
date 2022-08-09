import {Link} from 'react-router-dom'

function GuildManager ({user}) {

    return (
        <section>
            <h1>Hello {user}</h1>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </section>
    )
}

export default GuildManager