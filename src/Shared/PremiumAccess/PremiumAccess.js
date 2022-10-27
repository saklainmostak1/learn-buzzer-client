import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const premium = useLoaderData()
    console.log(premium)
    
    return (
        <div>
            <p>{premium.name}</p>
        </div>
    );
};

export default PremiumAccess;