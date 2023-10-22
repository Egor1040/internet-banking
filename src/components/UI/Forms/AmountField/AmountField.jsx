import './amountField.scss';

export const AmountField = ({ dataForTransfer, setDataForTransfer, isEmptyInput, setIsEmptyInput }) => {
    const getAmountPay = (e) => {
        const newValue = e.target.value.replace(/^0+/, "");

        if (+newValue > 9999999) return;

        setDataForTransfer({ ...dataForTransfer, sum: newValue });
        setIsEmptyInput(false);
    }

    return (
        <div className="recharge-amount">
            <div className="recharge-amount__title">Сума</div>
            <label className='recharge-amount__label'>
                <input
                    type="number"
                    placeholder='200.00'
                    className={`recharge-amount__input ${isEmptyInput ? 'recharge-amount__input_empty' : ''}`}
                    onChange={getAmountPay}
                    value={dataForTransfer.sum}
                />
                <span className="recharge-amount__currency">UAH</span>
            </label>
        </div>
    );
};