import './fastRequisitesPay.scss';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';

export const FastRequisitesPay = () => {
    return (
        <form className="requisites-pay widget-form">
            <label className='widget-form__label'>
                <div className="widget-form__icon">
                    <img src='img/icons/search.svg' alt='gray-card' />
                </div>
                <input
                    className="widget-form__input"
                    type='text'
                    name='requisites'
                    placeholder='UAXXXXXXXXXXXXXXXX'
                />
            </label>

            <WidgetButton />

        </form>
    );
};