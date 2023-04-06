import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Food_Card from './Food_Card';
import BarLoader from "react-spinners/BarLoader";
import BounceLoader from "react-spinners/BounceLoader";

const Food = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    const data = useLoaderData();
    const navigation = useNavigation();
    return (
        loading ?
        <div className="flex justify-center items-center h-screen">
            <BounceLoader
                color="#36d7b7"
                size={101}
            />
        </div> : 
            navigation.state === 'loading' ? <div className="flex justify-center items-center h-screen">
            <BarLoader
                color="#36d7b7"
                cssOverride={{}}
                height={10}
                width='200px'
            />
        </div> :
            <div className="">
                <h1 className='text-5xl font-bold text-center py-5'>Your Food</h1>
                <p className="text-3xl text-center">{navigation.state}</p>
                <div className='grid  md:grid-cols-2 gap-6 justify-items-center lg:grid-cols-3'>
                    {
                        data?.map(meal => <Food_Card meal={meal} key={meal.idMeal} />)
                    }
                </div>

            </div>
        // <h1>Hello </h1>
    );
};

export default Food;