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
                    <Card.Title> Other options like firebase that have to use implement authentication: </Card.Title>
                    <Card.Text>
                    MongoDB stores data in JSON-like documents that can vary in structure, Passport , Okta,  PingIdentity, Frontegg etc
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="text-center mb-5 shadow-lg">
                <Card.Header> <h2>How does the private route work???</h2> </Card.Header>
                <Card.Body>
                    <Card.Title>Work of private routes:</Card.Title>
                    <Card.Text>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="text-center mb-5 shadow-lg">
                <Card.Header> <h2> What is Node? How does Node work?</h2> </Card.Header>
                <Card.Body>
                    <Card.Title>Node:</Card.Title>
                    <Card.Text>
                    As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
                    </Card.Text>
                    <Card.Title>Work of Node:</Card.Title>
                    <Card.Text>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;