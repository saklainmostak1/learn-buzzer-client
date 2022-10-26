import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const premium = useLoaderData()
    console.log(premium.length)
    return (
        <div>
            <h2>Premium access</h2>
                        {
                premium.map(pre => <p
                key={pre.id}
                pre={pre}
                >      
                pre</p>)
            }
        </div>
    );
};

export default PremiumAccess;