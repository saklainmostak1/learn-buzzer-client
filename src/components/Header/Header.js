import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'
import toast from 'react-hot-toast';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Nav from 'react-bootstrap/Nav';
import logo1 from './Buzzer_Logo.jpg'
import Toggle from '../Toggle/Toggle';


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

        //  <Container className='d-flex justify-content-between'>
        // <div>
        //  <Navbar>
        //     <Link to='/' className='text-decoration-none me-5 '><h4>Learn Buzzer</h4></Link>
        // </Navbar>
        // <Navbar>
        //     <Link className='me-4 text-decoration-none ' to='/'>Home</Link>
        //     <Link className='me-4 text-decoration-none ' to='/course'>Course</Link>
        //     <Link className='text-decoration-none me-4' to='/faq'>FAQ</Link>
        //     <Link className=' me-4 text-decoration-none ' to='/blog'>Blog</Link>
        //     <Link className=' me-4 text-decoration-none ' to='/toggle'>Toggle</Link>

        //     {
        //         user?.uid ?
        //             <>
        //                 <OverlayTrigger
        //                     placement="right"
        //                     delay={{ show: 250, hide: 400 }}
        //                     overlay={renderTooltip}
        //                 >
        //                     <Image className=' me-3 rounded-circle w-0 h-25 rounded-5' src={user?.photoURL}></Image>
        //                 </OverlayTrigger>

        //                 <Button onClick={handleSignOut} variant="outline-success">LogOut</Button>
        //             </>
        //             :
        //             <>
        //                 <Link className=' me-4 text-decoration-none ' to='/login'>Login</Link>
        //                 <Link className=' me-4 text-decoration-none ' to='/register'>Register</Link>
        //             </>

        //     }
        // </Navbar>
        <div className='mb-5'>
            <Navbar className='shadow-lg ps-5 rounded rounded-5 pe-5 ' bg="light" expand="lg">
                <Container fluid className="d-flex justify-content-between">
                    <Navbar.Brand> <Link to='/' className='text-decoration-none me-5'><h3 className='mt-4 me-5'> <Image style={{ width: '80px' }} src={logo1}></Image> Learn Buzzer</h3></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link > <Link className='me-4 text-decoration-none ' to='/'>Home</Link></Nav.Link>
                            <Nav.Link> <Link className='me-4 text-decoration-none ' to='/course'>Course</Link></Nav.Link>
                            <Nav.Link> <Link className='text-decoration-none me-4' to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link>  <Link className=' me-4 text-decoration-none ' to='/blog'>Blog</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {
                    user?.uid ?
                        <>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Image className=' me-3 rounded-circle rounded-5' style={{ width: '50px', height: '50px' }} src={user?.photoURL}></Image>
                            </OverlayTrigger>

                            <Button className='me-3' onClick={handleSignOut} variant="outline-success">LogOut</Button>
                        </>
                        :
                        <>
                            <Link className=' me-4 text-decoration-none ' to='/login'>Login</Link>
                            <Link className=' me-4 text-decoration-none ' to='/register'>Register</Link>
                        </>
                }
                <Toggle></Toggle>
            </Navbar>
            
        </div>



    );
};

export default Header;