import React from 'react';
import '../../layout/Header/header.scss';
import { CurrencyExchange, PaymentHistory, ServicesMenu } from '../../components';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-left">
                    <Link to="/" className="header-logo">
                        <span className='header-logo__icon'></span>
                    </Link>
                    <div className="header-service">
                        Сервіси
                        <div className="header-service__img">
                            <img src="img/icons/arrow.svg" alt="service-arrow" /> 
                        </div>
                        <ServicesMenu activeMenu={true}/> 
                    </div>
                    <Link to="payment-history" className="header-history">
                        Історія платежів
                    </Link>
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