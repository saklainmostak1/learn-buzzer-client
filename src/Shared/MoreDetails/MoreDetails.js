import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCrown, FaEye, FaStar } from 'react-icons/fa';
import ReactToPdf from '../ReactToPdf/ReactToPdf';

const MoreDetails = () => {
    const tps = useLoaderData()
    console.log(tps[0].name)
    return (
        <div>
            <Card className='w-100' style={{ width: '18rem' }}>
            <ReactToPdf ></ReactToPdf>
            <p className='ms-2'>
                    <FaEye className='me-2'></FaEye>
                    {tps[0].total_view}
                    </p>
                <Card.Img variant="top" src={tps[0].image}/>
                <Card.Body>
                
                    <Card.Title>{tps[0].name}</Card.Title>
                    <Card.Text>
                       {tps[0].discription}
                    </Card.Text>
                    <div className='d-flex justify-content-between mb-3'>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            {tps[0].rating.number}
                        </div>
                        <div>
                            {tps[0].rating.badge}
                        </div>
                    </div>
                    <Link to={`/premium`}>
                    <Button className='w-100' variant="primary">  <FaCrown></FaCrown> Go To premium</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoreDetails;