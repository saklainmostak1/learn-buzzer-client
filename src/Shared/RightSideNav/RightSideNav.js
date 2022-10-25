import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const RightSideNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/topic-catagory')
        .then(Response => Response.json())
        .then(data => setCatagories(data))
    })
    return (
        <div>
             {
                catagories.map(catagori => )
            }
        </div>
    );
};

export default RightSideNav;