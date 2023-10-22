import './totalAmount.scss';

export const TotalAmount = () => {
    return (
        <div className='total-amount'>
            <div className="total-amount__item">
                <div className="total-amount__title">Комісія</div>
                <div className="total-amount__sum">0 UAH</div>
            </div>
            <div className="total-amount__item">
                <div className="total-amount__title">До сплати</div>
                <div className="total-amount__sum"> UAH</div>
            </div>
        </div>
    );
};