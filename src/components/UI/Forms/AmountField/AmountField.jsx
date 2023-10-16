import './amountField.scss';

export const AmountField = () => {
    return (
        <div className="recharge-amount">
            <div className="recharge-amount__title">Сума</div>
            <label className='recharge-amount__label'>
                <input
                    type="number"
                    min={1}
                    max={2000000}
                    placeholder='200.00'
                    className="recharge-amount__input"
                />
                <span className="recharge-amount__currency">UAH</span>
            </label>
            <div className="recharge-amount__templates">
                <div className="recharge-amount__template">50</div>
                <div className="recharge-amount__template">100</div>
                <div className="recharge-amount__template">150</div>
                <div className="recharge-amount__template">200</div>
            </div>
        </div>
    );
};