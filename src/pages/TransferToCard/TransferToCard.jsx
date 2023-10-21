import React from 'react';
import '../TransferToCard/transferToCard.scss';
import { AmountField } from '../../components';
import RecipientCard from '../../components/RecipientCard/RecipientCard';

export const TransferToCard = () => {
    return (
        <div className='transfer-card'>
            <div className="transfer-header">
                <div className="transfer-header__headline">
                    <div className="transfer-header__title-icon">
                        <img src="img/icons/icons-with-bg/card.svg" alt="card" />
                    </div>
                    <div className="transfer-header__text">
                        <h2 className='transfer-header__title'>Переказ</h2>
                        <div className="transfer-header__descr">
                            Переказ між своїми рахунками, з/на картку VISA/MasterCard
                            інших українських та закордонних банків.
                        </div>
                    </div>
                </div>
                <div className="transfer-header__icons-card">
                    <div className="transfer-header__icon-card">
                        <img src="./img/icons/visa.svg" alt="visa-card" />
                    </div>
                    <div className="transfer-header__icon-card">
                        <img src="./img/icons/mastercard.svg" alt="master-card" />
                    </div>
                </div>
            </div>
            <div className="transfer-main">
                <form className="transfer-form">
                    <div className="transfer-form__card">

                    </div>

                    <RecipientCard/>
                    <AmountField/>
                    <div className="transfer-form__prompt">
                            Натискаючи кнопку "Переказати" Ви приймаєте умови  
                            <span className='transfer-form__prompt transfer-form__prompt-green'> користування сервісом</span>
                    </div>
                    <button className='transfer-form__confirmation'>Переказати</button>
                </form>
                <div className="transfer-main__img">
                    <img src="img/arms-with-phone.svg" alt="ads-mobile" />
                </div>
            </div>
        </div>
    );
};