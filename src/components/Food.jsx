import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Food = () => {
    const loader = useLoaderData() ;
    console.log(loader);
    return (
        <div>
            <h1>Hello From Food</h1>
        </div>
    );
};

export default Food;