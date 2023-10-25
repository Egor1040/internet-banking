import React from 'react';
import '../PaymentHistory/paymentHistory.scss';
import { useSelector } from 'react-redux';

export const PaymentHistory = () => {
    const paymentHistory = useSelector(state => state.historyCards.historyCards);
    
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
                    <table className='payment-main__table'>
                        <thead className='payment-main__table-title'>
                            <tr className='payment-main__table-subtitle'>
                                <th className='payment-main__table-item'>Відправник</th>
                                <th className='payment-main__table-item'>Одержувач</th>
                                <th className='payment-main__table-item'>Сума</th>
                            </tr>
                        </thead>
                        <tbody className='payment-main__table-info'>

                            {
                                paymentHistory?.map(({ from, to, sum }) => (
                                    <tr key={crypto.randomUUID()} className='payment-main__table-body'>
                                        <td className='payment-main__table-child'>{from}</td>
                                        <td className='payment-main__table-child'>{to}</td>
                                        <td className='payment-main__table-child'>{sum} UAH</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};