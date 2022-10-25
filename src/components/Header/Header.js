import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'



const Header = () => {
    const {user,  logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        return logOut()
    }
    return (
        <Container className='d-flex justify-content-between'>
            <Navbar>
                <Link to='/' className='text-decoration-none me-5 '><h4>Learn Buzzer</h4></Link>
            </Navbar>
            <Navbar>
                <Link className='me-4 text-decoration-none ' to='/'>Home</Link>
                <Link className='me-4 text-decoration-none ' to='/course'>Course</Link>
                <Link className='text-decoration-none me-4' to='/faq'>FAQ</Link>
                <Link className=' me-4 text-decoration-none '  to='/blog'>Blog</Link>
                <Link className=' me-4 text-decoration-none '  to='/toggle'>Toggle</Link>

               {
                  user?.uid ?
                  <>
                  <Image className='h-50 me-3 rounded rounded-5' src={user?.photoURL}></Image>
                  <Button onClick={handleSignOut} variant="outline-success">LogOut</Button>
                  </>
                  :
                  <>
                   <Link className=' me-4 text-decoration-none '  to='/login'>Login</Link>
                <Link className=' me-4 text-decoration-none '  to='/register'>Register</Link>
                  </>
                  
               }
            </Navbar>
        </Container>
    );
};

export default Header;