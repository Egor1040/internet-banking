import './cardField.scss';

export const CardField = () => {
    return (
        <div className='card-field form-styles'>
            <label className='form-styles__label'>
                <input
                    className="form-styles__input"
                    type='text'
                    name='transfer'
                    placeholder='0000 0000 0000 0000'
                />
                <div className="form-styles__icon">
                    <img src='img/icons/gray-card.svg' alt='gray-card' />
                </div>
            </label>
        </div>
    );
};