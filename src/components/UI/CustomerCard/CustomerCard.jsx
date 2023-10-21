import './customerCard.scss';

export const CustomerCard = ({ data, setCurrentCurd }) => {
    const { number, expiryData, CVV, balance } = data;

    const getDataCurrentCard = () => {
        setCurrentCurd({
            number,
            expiryData,
            CVV,
        })
    }

    return (
        <div className="customer-card" onClick={getDataCurrentCard}>
            <div className="customer-card__icon">
                <img src="img/icons/mastercard.svg" alt="card" />
            </div>
            <div className='customer-card__data-card'>
                <div className="customer-card__number">{number}</div>
                <div className="customer-card__expiry-data">{expiryData}</div>
            </div>
        </div>
    );
};