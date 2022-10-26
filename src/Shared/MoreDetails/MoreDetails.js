import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCrown } from 'react-icons/fa';

const MoreDetails = () => {
    const tps = useLoaderData()
    console.log(tps[0].name)
    return (
        <div>
            <Card className='w-100' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tps[0].image}/>
                <Card.Body>
                    <Card.Title>{tps[0].name}</Card.Title>
                    <Card.Text>
                       {tps[0].discription}
                    </Card.Text>
                    <Link to={`/premium`}>
                    <Button className='w-100' variant="primary">  <FaCrown></FaCrown> Go To premium</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoreDetails;