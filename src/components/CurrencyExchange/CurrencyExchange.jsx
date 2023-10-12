import React from 'react';
import '../CurrencyExchange/currencyExchange.scss';
import { useFetch } from '../../utils/hooks/useFetch';

const CurrencyExchange = () => {
    const data = useFetch('https://api.monobank.ua/bank/currency');

    if (!data.res || data.res.length === 0) {
        return <div>Завантаження...</div>;
    }

    return (
        <div className="header-exchange">
            <div className="header-exchange__icon">
                <img src="img/icons/dollar.svg" alt="USD-icon" />
            </div> 
            {data.res[0].rateBuy}   /{data.res[0].rateSell}
        </div>
    );
};

export default CurrencyExchange;