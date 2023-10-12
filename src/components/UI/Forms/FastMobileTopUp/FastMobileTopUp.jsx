import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import './fastMobileTopUp.scss';

export const FastMobileTopUp = () => {
    return (
        <form className="mobile-topUp widget-form">
            <label className='widget-form__label'>
                <div className='widget-form__operator'>
                    <div className="widget-form__icon-country">
                        <img src='img/icons/ukrainian-flag.svg' alt='gray-card' />
                    </div>
                    <span className="widget-form__operator-number">+380</span>
                    <div className="widget-form__more-operators">
                        <img src="img/icons/triangle.svg" alt="triangle" />
                    </div>
                </div>
                <input
                    className="widget-form__input"
                    type='text'
                    name='mobile'
                    placeholder='000000000'
                />
            </label>

            <WidgetButton />

        </form>
    );
};