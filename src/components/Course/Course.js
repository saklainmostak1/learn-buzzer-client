import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';


const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9'>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;