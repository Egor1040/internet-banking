import React from 'react';
import '../PaymentHistory/paymentHistory.scss';
import { useSelector } from 'react-redux';

export const PaymentHistory = () => {
    const paymentHistory = useSelector(state => state.historyCards.historyCards);
    const cardNumberRegex = /^(?:4\d{3}\s?\d{4}\s?\d{4}\s?\d{4}|5[1-5]\d{4}\s?\d{4}\s?\d{4}\s?\d{4})$/;
    
    return (
        <div className='payment-history'>
            <div className="payment-header">
                <div className="payment-header__headline">
                    <div className="payment-header__title-icon">
                        <img src="img/icons/history-payment.svg" alt="payment-history-info" />
                    </div>
                    <div className="payment-header__text">
                        <h2 className='payment-header__title'>Історія платежів</h2>
                    </div>
                </div>
            </div>

            <div className="payment-main">
                <div className="payment-main__block">
                    <div className="payment-main__selection">
                        <div className='payment-main__select'>Історія по карткам</div>
                    </div>
                </div>
                <div className="payment-main__content">
                    <div className="payment-main__vidget">
                        <div className="payment-main__filter">
                            <div className="payment-main__filter-icon">
                                <img src="img/icons/filter.svg" alt="filter-icon" />
                            </div>
                            <div className="payment-main__filter-text">
                                Фільтр
                            </div>
                        </div>
                    </div>
                    <div className='payment-main__table'>
                        <div className='payment-main__table-item'>Відправник</div>
                        <div className='payment-main__table-item'>Одержувач</div>
                        <div className='payment-main__table-item'>Сума</div>
                    </div>
                    <div className='payment-main__table-info'>
                        {
                            paymentHistory?.map(({ from, to, sum }) => (
                                <div key={crypto.randomUUID()} className='payment-main__table-body'>
                                    <div className='payment-main__table-child'>
                                        <div className='payment-main__table-container'>
                                            {cardNumberRegex.test(from) && <div className='payment-main__table-img'>
                                                <img src="img/icons/icons-with-bg/card.svg" alt="card" />
                                            </div>}
                                            <div>{from}</div>
                                        </div>
                                    </div>
                                    <div className='payment-main__table-child'>
                                        <div className='payment-main__table-container'>
                                            {cardNumberRegex.test(to) && <div className='payment-main__table-img'>
                                                <img src="img/icons/icons-with-bg/card.svg" alt="card" />
                                            </div>}
                                            {!cardNumberRegex.test(to) && <div className='payment-main__table-img'>
                                                <img src="img/icons/icons-with-bg/phone.svg" alt="phone" />
                                            </div>}
                                            <div>{to}</div>
                                        </div>
                                    </div>
                                    <div className='payment-main__table-child'>{sum} UAH</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};