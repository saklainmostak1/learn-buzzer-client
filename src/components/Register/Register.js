import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('')
    const {createUser, upadateUserProfile} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            form.reset('')
            handleUpdateProfile(name, photoURL)
            toast.success('Successfully Register!');
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
    }
    const handleUpdateProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        
        upadateUserProfile(profile)
        .then(() => {} )
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <Container className='w-50 m-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoURL" name='photoURL' placeholder="Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Text className="text-dark">
                       If you already have an account please
                       <Link to='/login'> Login</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                       {error}
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;