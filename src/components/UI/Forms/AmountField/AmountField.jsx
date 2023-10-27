import './amountField.scss';

export const AmountField = ({ dataForTransfer, setDataForTransfer, isEmptyAmount, setIsEmptyAmount }) => {
    const getAmountPay = (e) => {
        const newValue = e.target.value.replace(/^0+/, "");

        if (+newValue > 9999999) return;

        setDataForTransfer(prev => ({ ...prev, sum: newValue }));
        setIsEmptyAmount(false);
    }

    return (
        <div className="amount-field form-styles">
            <div className="form-styles__title">Сума</div>
            <label className='form-styles__label'>
                <input
                    type="number"
                    placeholder='200.00'
                    className={`form-styles__input ${isEmptyAmount ? 'form-styles__input_empty' : ''}`}
                    onChange={getAmountPay}
                    value={dataForTransfer.sum}
                />
                <span className="form-styles__currency">UAH</span>
            </label>
        </div>
    );
};