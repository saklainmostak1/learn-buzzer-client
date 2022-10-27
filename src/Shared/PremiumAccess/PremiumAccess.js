import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const PremiumAccess = () => {
    const premium = useLoaderData()
    console.log(premium)
    const pay = () =>{
      toast.success('SucessFully Paid');
    }
    return (
        <div>
      <Card className='text-center bg-info text-dark'>
          <Card.Header> <h3>Purchase Premium Course From Here</h3> </Card.Header>
          <Card.Body>
            <Card.Title> <h4 className='mb-3'>{premium.name}</h4> </Card.Title>
            <Card.Text>
               <h5>Cost:  {premium.premium_cost}</h5>
               <p>To Get Premium Access Please Paid {premium.premium_cost} </p>
            </Card.Text>
            <Button onClick={ pay}>Click Here To Pay</Button>
          </Card.Body>
          <Button><Link className='text-light' to='/course' >Back to Courses</Link></Button>
        </Card>
        </div>
    );
};

export default PremiumAccess;