import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';


const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg='5'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='7'>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;