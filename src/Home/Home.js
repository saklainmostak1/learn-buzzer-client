import React from 'react';
import Card from 'react-bootstrap/Card';
import image from './Learn-Programming.png'

const Home = () => {
    return (
        <div>
            <Card className='w-100 border-0'>
      <Card.Img variant="top" src={image} />
      <Card.Body >
        <Card.Title>Welcome To My Learning Website Learn Buzzer</Card.Title>
        <Card.Text>
          This Website is a programming learning website. There various type of programming language that you can learn
          I try to describe about various type of programming language in this website you can learn many things from my website 
        </Card.Text>
        <h6>Thank You For Visiting My Website</h6>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Home;