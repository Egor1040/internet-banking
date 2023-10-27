import './requisitesField.scss';

export const RequisitesField = () => {
    return (
        <form className="requisites-field form-styles">
            <label className='form-styles__label'>
                <div className="form-styles__icon">
                    <img src='img/icons/search.svg' alt='gray-card' />
                </div>
                <input
                    className="form-styles__input"
                    type='text'
                    name='requisites'
                    placeholder='UAXXXXXXXXXXXXXXXX'
                />
            </label>
        </form>
    );
};