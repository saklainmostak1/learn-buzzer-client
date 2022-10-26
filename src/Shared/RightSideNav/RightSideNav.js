import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSideNavDetails from '../RightSideNavDetails/RightSideNavDetails';


const RightSideNav = () => {
    const catagories = useLoaderData()
    console.log(catagories)
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