import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            This is home page....
            <Outlet></Outlet>
        </div>
    );
};

export default Home;