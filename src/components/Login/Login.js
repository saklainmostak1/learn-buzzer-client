import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('')
    const {googleSingIn, githubSignIn,login } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log( email, password)
        login(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset('')
           
            toast.success('Successfully Login!');
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
    }
    const handleGoogleLogIn = () =>{
        return googleSingIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            toast.success('Successfully Login!');
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const handleGithubLogin = () =>{
        return githubSignIn(githubProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success('Successfully Login!');

        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <Container className='w-50 m-auto'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Text className="text-danger">
                       {error}
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Button className='mt-2 w-100' onClick={handleGoogleLogIn} variant="outline-info"><FaGoogle></FaGoogle>  Google Login</Button>
                <br />
                <Button onClick={handleGithubLogin} className='mt-2 w-100' variant="outline-dark"><FaGithub></FaGithub>  Github Login </Button>
            </Form>
        </Container>
    );
};

export default Login;