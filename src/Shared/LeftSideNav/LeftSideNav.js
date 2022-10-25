import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

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
                catagories.map(catagori =>  <Button className='d-block mb-4 rounded' 
                key={catagori.id}
                variant="outline-primary">{catagori.name}</Button>)
            }
        </div>
    );
};

export default LeftSideNav;