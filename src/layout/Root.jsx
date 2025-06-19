import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;