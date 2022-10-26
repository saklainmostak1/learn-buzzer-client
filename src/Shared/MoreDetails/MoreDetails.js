import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MoreDetails = () => {
    const tps = useLoaderData()
    console.log(tps[0].name)
   
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tps[0].image}/>
                <Card.Body>
                    <Card.Title>{tps[0].name}</Card.Title>
                    <Card.Text>
                       {tps[0].discription}
                    </Card.Text>
                    <Button className='w-100' variant="primary">Go To premium</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoreDetails;