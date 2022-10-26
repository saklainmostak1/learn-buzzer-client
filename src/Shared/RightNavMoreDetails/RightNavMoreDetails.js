import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaCrown } from 'react-icons/fa';


const RightNavMoreDetails = () => {
    const moreDetails = useLoaderData()
    const {name, image, discription} = moreDetails
    return (
        <Container >
            <Card className='w-100' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='h-50' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                   <Link to='/premium'>
                        <Button className='w-100' variant="primary">  <FaCrown></FaCrown> Go to Premium</Button>
                        </Link>
                  
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RightNavMoreDetails;