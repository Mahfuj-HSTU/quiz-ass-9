import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto max-w-[85%] p-2 pt-0'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
