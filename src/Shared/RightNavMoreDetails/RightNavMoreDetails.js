import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaCrown, FaEye, FaStar } from 'react-icons/fa';
import ReactToPdf from '../ReactToPdf/ReactToPdf';


const RightNavMoreDetails = () => {
    const moreDetails = useLoaderData()
    // console.log(moreDetails)
    const {name, image, discription, rating, total_view, _id} = moreDetails
    return (
        <Container >
            <Card className='w-100' style={{ width: '18rem' }}>
                <ReactToPdf></ReactToPdf>
                <p className='ms-2'>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                    </p>
                <Card.Img variant="top" className='h-50' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                       <div className='d-flex justify-content-between mb-3'>
                        <div>
                        <FaStar className='text-warning me-2'>
                        </FaStar>
                        <span>{rating.number}</span>
                        </div>
                            <div>
                            <span>{rating.badge}</span>
                            </div>
                        
                       </div>
                   <Link to={`/premium/${_id}`}>
                        <Button className='w-100' variant="primary">  <FaCrown></FaCrown> Go to Premium</Button>
                        </Link>
                  
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RightNavMoreDetails;