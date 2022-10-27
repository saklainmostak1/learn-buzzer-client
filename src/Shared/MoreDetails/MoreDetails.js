import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCrown, FaEye, FaStar } from 'react-icons/fa';
import ReactToPdf from '../ReactToPdf/ReactToPdf';

const MoreDetails = () => {
    const tps = useLoaderData()

    const { total_view, image, name, rating, discription, _id } = tps[0]
    return (
        <div>
            <Card className='w-100' style={{ width: '18rem' }}>

                <p className='ms-2'>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </p>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className='d-flex justify-content-between mb-4'>
                        <Card.Title>{name}</Card.Title>
                        <ReactToPdf ></ReactToPdf>
                    </div>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                    <div className='d-flex justify-content-between mb-3'>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            {rating.number}
                        </div>
                        <div>
                            {rating.badge}
                        </div>
                    </div>
                    <Link to={`/premium/${_id}`}>
                        <Button className='w-100' variant="primary">  <FaCrown></FaCrown> Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoreDetails;