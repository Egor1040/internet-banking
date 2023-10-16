import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InitialPage, RechargeMobile } from '../pages';
import { ServicesWidget } from '../components';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialPage />}>
                    <Route index element={<ServicesWidget />} />
                    <Route path='recharge-mobile' element={<RechargeMobile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;