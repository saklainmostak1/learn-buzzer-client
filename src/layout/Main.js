import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';



const Main = () => {
    return (
        <Container>
               <Header></Header>
               <Outlet></Outlet>
        </Container>
    );
};

export default Main;