import './mobileField.scss';

export const MobileField = ({ setDataForTransfer, dataForTransfer, setIsEmptyPhone, isEmptyPhone }) => {
    const getPhoneNumber = (e) => {
        const newValue = e.target.value;

        if (newValue.length > 9) {
            return;
        };

        setDataForTransfer(prev => ({ ...prev, to: `+380${newValue}` }));
        setIsEmptyPhone(false);
    }

    return (
        <div className="mobile-field form-styles">
            <div className="form-styles__title">Номер</div>
            <label className='form-styles__label'>
                <div className='form-styles__operator'>
                    <div className="form-styles__icon-country">
                        <img src='img/icons/ukrainian-flag.svg' alt='gray-card' />
                    </div>
                    <span className="form-styles__operator-number">+380</span>
                    <div className="form-styles__more-operators">
                        <img src="img/icons/triangle.svg" alt="triangle" />
                    </div>
                </div>
                <input
                    type='number'
                    className={`form-styles__input ${isEmptyPhone ? 'form-styles__input_empty' : ''}`}
                    name='mobile'
                    placeholder='000000000'
                    onChange={getPhoneNumber}
                    value={dataForTransfer.to.slice(4)}
                />
            </label>
        </div>
    );
};