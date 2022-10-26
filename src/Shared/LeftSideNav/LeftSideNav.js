import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/topic-catagory')
        .then(Response => Response.json())
        .then(data => setCatagories(data))
    })
    return (
        <div>
            <h2>Catagory: {catagories.length}</h2>
            {
                catagories.map(catagory =><Link to=''  className='btn-class'>  <Button className='d-block  mb-4 rounded' 
                key={catagory.id}
                variant="outline-danger">{catagory.name}</Button></Link>)
            }
        </div>
    );
};

export default LeftSideNav;