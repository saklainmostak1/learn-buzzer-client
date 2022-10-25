import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'
import toast from 'react-hot-toast';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        return logOut()
            .then(() => {
                toast.success('Successfully LogOut!');
            })
            .catch(error => {
                console.error(error)
            })
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );
    return (
        <Container className='d-flex justify-content-between'>
            <Navbar>
                <Link to='/' className='text-decoration-none me-5 '><h4>Learn Buzzer</h4></Link>
            </Navbar>
            <Navbar>
                <Link className='me-4 text-decoration-none ' to='/'>Home</Link>
                <Link className='me-4 text-decoration-none ' to='/course'>Course</Link>
                <Link className='text-decoration-none me-4' to='/faq'>FAQ</Link>
                <Link className=' me-4 text-decoration-none ' to='/blog'>Blog</Link>
                <Link className=' me-4 text-decoration-none ' to='/toggle'>Toggle</Link>

                {
                    user?.uid ?
                        <>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Image className='h-25 me-3 rounded rounded-5' src={user?.photoURL}></Image>
                            </OverlayTrigger>

                            <Button onClick={handleSignOut} variant="outline-success">LogOut</Button>
                        </>
                        :
                        <>
                            <Link className=' me-4 text-decoration-none ' to='/login'>Login</Link>
                            <Link className=' me-4 text-decoration-none ' to='/register'>Register</Link>
                        </>

                }
            </Navbar>
        </Container>
    );
};

export default Header;