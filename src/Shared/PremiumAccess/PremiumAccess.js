import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const PremiumAccess = () => {
    const premium = useLoaderData()
    console.log(premium)
    return (
        <div>
      <Card className='text-center'>
          <Card.Header> <h3>Purchase Premium Course From Here</h3> </Card.Header>
          <Card.Body>
            <Card.Title> <h4 className='mb-3'>{premium.name}</h4> </Card.Title>
            <Card.Text>
               <h5>Cost:  {premium.premium_cost}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
};

export default PremiumAccess;