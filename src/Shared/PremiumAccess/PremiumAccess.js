import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const premium = useLoaderData()
    console.log(premium)
    return (
        <div>
            <h2>Premium access</h2>
                        {
                Object.entries.premium.map(pre => <Link to='/premium'
                key={pre.id}
                pre={pre}
                >      
                pre</Link>)
            }
        </div>
    );
};

export default PremiumAccess;