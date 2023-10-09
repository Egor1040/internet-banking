import React from 'react';
import '../styles/main/main.scss';

const Main = () => {
    return (
        <main className='main'>
            <div className="fast-payments">
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/card.svg' alt='multicolor-card' />
                        </div>
                        <div className="fast-payment__title">Переказ на картку</div>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field'>
                            <input
                                className="fast-payment__input"
                                type='text'
                                name='data-payment'
                                placeholder='0000 0000 0000 0000'
                            />
                            <div className="fast-payment__icon-field">
                                <img src='img/icons/gray-card.svg' alt='gray-card' />
                            </div>
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="fast-payment__footer">
                        <div className="fast-payment__description">
                            VISA/MasterCard українських та закордонних банків
                        </div>
                    </div>
                </div>
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/phone.svg' alt='multicolor-card' />
                        </div>
                        <div className="fast-payment__title">Переказ на картку</div>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field'>
                            <div className='fast-payment__operator'>
                                <div className="fast-payment__icon-field">
                                    <img src='img/icons/ukrainian-flag.svg' alt='gray-card' />
                                </div>
                                <span className="fast-payment__operator-number">+380</span>
                                <div className="fast-payment__more-operators">
                                    <img src="img/icons/triangle.svg" alt="triangle" />
                                </div>
                            </div>
                            <input
                                className="fast-payment__data-field"
                                type='text'
                                name='data-payment'
                                placeholder='000000000'
                            />
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/communication.svg' alt='multicolor-card' />
                        </div>
                        <div className="fast-payment__title">Переказ на картку</div>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field'>
                            <div className="fast-payment__icon-field">
                                <img src='img/icons/search.svg' alt='gray-card' />
                            </div>
                            <input
                                className="fast-payment__data-field"
                                type='text'
                                name='data-payment'
                                placeholder='UAXXXXXXXXXXXXXXXX'
                            />
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="fast-payment__footer">
                        <div className="fast-payment__description">
                            IBAN, ЄДРПОУ, номер р/рахунку або назва одержувача
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;