import './customerCard.scss';

export const CustomerCard = ({ data, chooseCard }) => {
    const { number, nameCard, balance, id } = data;
    
    return (
        <div className="customer-card" onClick={() => chooseCard(id)}>
            <div className="customer-card__icon">
                <img src={`img/icons/cards/${id}.png`} alt="card" />
            </div>
            <div className='customer-card__data-card'>
                <div className='customer-card__item'>
                    <div className="customer-card__number">* {number.slice(-4)}</div>
                    <div className="customer-card__name">{nameCard}</div>
                </div>
                <div className="customer-card__balance">{balance} UAH</div>

            </div>
        </div>
    );
};