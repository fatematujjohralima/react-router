import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import SideBar from '../Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <SideBar></SideBar>


            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;