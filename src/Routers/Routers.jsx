import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BasicStructure, StarterContent, PaymentHistory, RechargeMobile, TransferToCard } from '../pages';

const Routers = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<BasicStructure />}>
                    <Route index element={<StarterContent />} />
                    <Route path='recharge-mobile' element={<RechargeMobile />} />
                    <Route path='transfers' element={<TransferToCard />} />
                    <Route path='payment-history' element={<PaymentHistory />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default Routers;