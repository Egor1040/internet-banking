import { useState } from 'react';
import RenderElement from '../../../../utils/hocs/RenderElement';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import './fastRechargeMobile.scss';

export const FastRechargeMobile = ({ isButton }) => {
    const [value, setValue] = useState('');

    const getPhoneNumber = (e) => {
        const newValue = e.target.value;

        if (newValue.length > 9) return;

        setValue(newValue)
    }

    return (
        <div className="recharge-widget widget-form">
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
                    type='number'
                    className="widget-form__input"
                    name='mobile'
                    placeholder='000000000'
                    onChange={getPhoneNumber}
                    value={value}
                />
            </label>

            <RenderElement data={isButton}>
                <WidgetButton />
            </RenderElement>

        </div>
    );
};