import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import MainApi from '../mainApi';
import UseApi from '../HandelApi';

const Home = () => {
    const navigate = useNavigate();
    const [search , setSearch] = useState(''); 
    // console.log('search', search)
    UseApi(search);
    const onchange = (e) => {
        setSearch(e.target.value);
    } 
    
    return (
        <div>
            <div className="hero h-[100vh]" style={{ backgroundImage: ` url("https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.311873990.1672666843&semt=sph")` }}>
                <div className="hero-overlay bg-black bg-opacity-[0.6]"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-md flex flex-col justify-center items-center ">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <p className="mb-5 italic text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!</p>
                        <input type="text" className='py-2 px-3 w-full my-2 rounded-lg focus:border-blue-500' placeholder='Search Anything ' onChange={onchange} />
                        <button onClick={()=>navigate(`/food/${search}`)} className="btn block btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;