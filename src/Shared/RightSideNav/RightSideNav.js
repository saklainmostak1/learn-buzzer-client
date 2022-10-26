import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSideNavDetails from '../RightSideNavDetails/RightSideNavDetails';


const RightSideNav = () => {
    const catagories = useLoaderData()
    return (
        <div className='row'>
             {
                catagories.map(catagori => <RightSideNavDetails
                key={catagori._id}
                catagori={catagori}
                ></RightSideNavDetails> )
            }
        </div>
    );
};

export default RightSideNav;