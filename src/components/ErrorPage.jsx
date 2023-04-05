import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <div className="hero h-[100vh]" style={{ backgroundImage: ` url("error.png")` }}>
                <div className="hero-overlay bg-black bg-opacity-[0.6]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">The Page you looking for that is not define </p>
                        <button onClick={()=>navigate('/')} className="btn btn-primary">Go To Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;