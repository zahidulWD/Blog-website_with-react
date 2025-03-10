import React from 'react';
import Navbar from '../components/Navbar';
import MainFooter from '../components/MainFooter';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default MainLayout;