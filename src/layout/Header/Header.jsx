import React from 'react';
import '../../layout/Header/header.scss';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import PaymentHistory from '../../components/PaymentHistory/PaymentHistory';

export const Header = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo">
                        <span className='header-logo__icon'></span>
                    </div>
                    <div className="header-service">
                        Сервіси
                        <div className="header-service__img">
                            <img src="img/icons/arrow.svg" alt="service-arrow" /> 
                        </div> 
                    </div>
                    <PaymentHistory/>
                </div>
                <div className="header-right">
                    <CurrencyExchange/>
                    <div className='header-login'>
                        <div className="login-wrap">
                            <button className="login">
                                <div className="login-img">
                                    <img src='img/icons/user.svg' alt='user' className="login-img__icon" />
                                </div>
                                <p className="login-title">Вхід</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};