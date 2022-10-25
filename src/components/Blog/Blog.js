import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div >
            <Card className="text-center mb-5 shadow-lg ">
                <Card.Header> <h2>What is Cors???</h2> </Card.Header>
                <Card.Body>
                    <Card.Title>Cors:</Card.Title>
                    <Card.Text>

                        In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="text-center mb-5 shadow-lg">
                <Card.Header> <h2>Why are you using firebase??? What other options do you have to implement authentication?</h2> </Card.Header>
                <Card.Body>
                    <Card.Title> Using firebase: </Card.Title>
                    <Card.Text>
                    Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Card.Text>
                    <Card.Title> Other options like firebase i have to implement authentication: </Card.Title>
                    <Card.Text>
                    MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, Passport , Okta,  PingIdentity, Frontegg etc
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="text-center mb-5 shadow-lg">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="text-center mb-5 shadow-lg">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;