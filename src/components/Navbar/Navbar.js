import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-teal-700 rounded'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden rounded bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="bg-teal-600 text-white menu menu-compact dropdown-content mt-3 p-2 shadow  rounded w-52">
                            <li className='text-sm'><Link to='/'>Dashboard</Link></li>
                            <li className='text-sm'><Link to='/table'>Table</Link></li>
                            <li className='text-sm'><Link to='/'>Admin</Link></li>
                            <li className='text-sm'><Link to='/'>Report</Link></li>
                        </ul>
                    </div>

                    <div className='hidden lg:block bg-opacity-20 backdrop-blur-lg drop-shadow-lg max-w-full rounded-lg'>
                        <Link to='/' class="flex items-center  normal-case font-semibold text-xl">
                            <img style={{ width: '30px', borderRadius: '50%' }} src='https://www.small-improvements.com/wp-content/uploads/2016/10/Profile_Tore.png' alt='human' />
                            <p className='text-sm text-white ml-2'>Behavioral Therapy Center</p>
                        </Link>
                    </div>

                </div>

                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 ">
                        <li className='text-sm bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white mr-2'><Link to='/'>Dashboard</Link></li>
                        <li className='text-sm bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white mr-2'><Link to='/table'>Table</Link></li>
                        <li className='text-sm bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white mr-2'><Link to='/'>Admin</Link></li>
                        <li className='text-sm bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white mr-2'><Link to='/'>Report</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;