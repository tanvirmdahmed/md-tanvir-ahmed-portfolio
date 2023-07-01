import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Themes from '../components/Themes';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Themes></Themes>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;