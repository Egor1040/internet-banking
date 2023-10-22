import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { InitialPage, PaymentHistory, RechargeMobile, TransferToCard } from '../pages';
import { ServicesWidget } from '../components';

const Routers = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<InitialPage />}>
                    <Route index element={<ServicesWidget />} />
                    <Route path='recharge-mobile' element={<RechargeMobile />} />
                    <Route path='transfers' element={<TransferToCard/>}/>
                    <Route path='payment-history' element={<PaymentHistory/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default Routers;