import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

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
                    <Button className='w-100' variant="primary">Go to Premium</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RightNavMoreDetails;