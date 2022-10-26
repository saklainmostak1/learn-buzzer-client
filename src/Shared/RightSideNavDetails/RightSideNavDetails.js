import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSideNavDetails = ({ catagori }) => {
    const {_id, name, image, discription } = catagori
    return (
        <CardGroup style={{ width: '18rem' }}>
            <Card className='mb-5' style={{ width: '18rem' }} >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription.length > 200 ? 
                        <p>{discription.slice(0,250) + '...'}
                        <Link to={`/topic/${_id}`}>Read More</Link>
                        </p>  
                        :
                        <p>{discription}</p>  
                    }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default RightSideNavDetails;