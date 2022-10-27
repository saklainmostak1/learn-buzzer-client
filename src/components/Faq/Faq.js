import React from 'react';
import Card from 'react-bootstrap/Card';

const Faq = () => {
    return (
        <div>
         <Card border="primary" className='text-center shadow-lg border border-0' >
        <Card.Header>Thank You To Visiting My Website</Card.Header>
        <Card.Body>
          <Card.Title>WELCOME</Card.Title>
          <Card.Text>
            I think you learn many things from my website
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Faq;