import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='flex relative w-[90%] mx-auto justify-between py-3'>
            <div className="logo-part">
                <h1 className='text-4xl font-semibold btn btn-ghost'>Ti-Food</h1>
            </div>
            <div className=''>
                {/* <ul className="md:flex hidden items-center gap-5"> */}
                <ul className={`md:flex text-white bg-blue-500 md:bg-transparent md:text-black selection: items-center gap-5 duration-500 ${isOpen ? 'absolute right-6 top-14 flex flex-col justify-center' : 'absolute right-6 -top-44 md:top-4'}`}>
                    <li className='text-[18px] font-semibold'><NavLink to='/'>Home</NavLink></li>
                    <li className='text-[18px] font-semibold'><NavLink to='/about'>About Us</NavLink></li>
                    <li className='text-[18px] font-semibold'><NavLink to='/food'>View Food</NavLink></li>
                    <li className='text-[18px] font-semibold'><NavLink to='/offer'>Today Offer</NavLink></li>
                    <li className='btn btn-secondary'><NavLink to='/login'>Join Now</NavLink></li>
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={toggle} className='btn btn-ghost'>
                        {

                            isOpen ? <XMarkIcon className='w-8 h-8' /> : <AdjustmentsHorizontalIcon className='w-8 h-8' />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;