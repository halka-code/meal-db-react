import React, { useState } from 'react';

const Food_Card = ({ meal }) => {
    // console.log(meal)
    const { strMealThumb, strMeal, strYoutube } = meal;
    const [viewMore , setViewMore]= useState('View More'); 
    const handelViewText = () => {
        setViewMore('Click Now')
    }
    const handelViewText3 = () => {
        setViewMore('View More')
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 px-4 hover:-translate-y-2 duration-200 py-2 shadow-xl">
                <figure className='h-[250px] hover:cursor-pointer relative hover:bg-blue-500'>
                    <img src={strMealThumb} className='' alt="Shoes" /> 
                    <div className="absolute opacity-0 duration-200 hover:opacity-100 z-20 inset-0 hover:bg-black hover:bg-opacity-30">
                        <div className="flex justify-center items-center mt-[25%]">
                            <button onMouseEnter={handelViewText} onMouseLeave={handelViewText3} className="btn btn-secondary hover:ring-4">{viewMore}</button>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary hover:ring-1 hover:ring-orange-400" onClick={() => open(`${strYoutube}`, '_blank')}>Youtube</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food_Card;