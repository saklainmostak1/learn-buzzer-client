import React from 'react';
import Button from 'react-bootstrap/Button';
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