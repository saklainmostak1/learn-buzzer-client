import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../Shared/Footer/Footer';



const Main = () => {
    return (
        <Container>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
        </Container>
    );
};

export default Main;