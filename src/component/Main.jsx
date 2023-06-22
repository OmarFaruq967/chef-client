import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';


const Main = () => {
    return (
        <div className=' min-h-screen '>
            <Header></Header>
            <div className='min-h-[calc(100vh-341px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;