import axios from "axios";
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'

function SignupPage() {
    let navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventdefault()
        await submitForm(event.target)
        navigate("/", { replace: true})
    }

    return (
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>                       
        </form>
    )
}

export default SignupPage