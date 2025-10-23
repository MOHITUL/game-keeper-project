import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='p-4'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;