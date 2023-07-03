import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Themes from '../components/Themes';
import { HashLoader } from 'react-spinners';

const Main = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {
                loading ? <div className='loader'>
                    <HashLoader color="#36d7b7" />
                </div> : <>
                    <Navbar></Navbar>
                    <Themes></Themes>
                    <Outlet></Outlet>
                </>
            }
        </div>
    );
};

export default Main;