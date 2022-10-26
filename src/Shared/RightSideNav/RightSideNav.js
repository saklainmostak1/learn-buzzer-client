import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RightSideNavDetails from '../RightSideNavDetails/RightSideNavDetails';


const RightSideNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/topic-catagory')
        .then(Response => Response.json())
        .then(data => setCatagories(data))
    })
    return (
        <div className='row'>
             {
                catagories.map(catagori => <RightSideNavDetails
                key={catagori.id}
                catagori={catagori}
                ></RightSideNavDetails> )
            }
        </div>
    );
};

export default RightSideNav;