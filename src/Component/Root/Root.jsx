import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import SideBar from '../Sidebar/Sidebar';
import './Root.css'
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="root-main">
                <SideBar></SideBar>

                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Root;