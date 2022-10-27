import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
        fetch('https://learn-buzzer-server.vercel.app/topic-catagory')
        .then(Response => Response.json())
        .then(data => setCatagories(data))
    })
    return (
        <div>
            {
                catagories.map(catagory =>
                    <Link to={`/catagory/${catagory.id}`}  className='btn-class'>  <Button className='d-block  mb-4 rounded' 
                key={catagory.id}
                variant="outline-danger">{catagory.name}</Button></Link>
                )
            }
        </div>
    );
};

export default LeftSideNav;