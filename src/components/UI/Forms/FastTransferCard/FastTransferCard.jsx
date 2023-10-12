import './fastTransferCard.scss';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';

export const FastTransferCard = () => {
    return (
        <form className="transfer-card widget-form">
            <label className='widget-form__label'>
                <input
                    className="widget-form__input"
                    type='text'
                    name='transfer'
                    placeholder='0000 0000 0000 0000'
                />
                <div className="widget-form__icon">
                    <img src='img/icons/gray-card.svg' alt='gray-card' />
                </div>
            </label>

            <WidgetButton />

        </form>
    );
};