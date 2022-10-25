import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';



const Login = () => {
    const {googleSingIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogIn = () =>{
        return googleSingIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <Container className='w-50 m-auto'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Button className='mt-2 w-100' onClick={handleGoogleLogIn} variant="outline-info"><FaGoogle></FaGoogle>  Google Login</Button>
                <br />
                <Button className='mt-2 w-100' variant="outline-dark"><FaGithub></FaGithub>  Github Login </Button>
            </Form>
        </Container>
    );
};

export default Login;