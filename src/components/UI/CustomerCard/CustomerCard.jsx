import './customerCard.scss';

export const CustomerCard = ({ data }) => {
    const { number, expiryData } = data;

    return (
        <div className="customer-card">
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