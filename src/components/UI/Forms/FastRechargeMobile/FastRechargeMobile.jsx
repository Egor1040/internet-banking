import { useState } from 'react';
import RenderElement from '../../../../utils/hocs/RenderElement';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import './fastRechargeMobile.scss';

export const FastRechargeMobile = ({ isButton, setDataForTransfer, dataForTransfer, setIsEmptyPhone, isEmptyPhone }) => {
    const [value, setValue] = useState('');

    const getPhoneNumber = (e) => {
        const newValue = e.target.value;

        if (newValue.length > 9) {
            return;
        };

        setDataForTransfer({ ...dataForTransfer, to: `+380${newValue}` });
        setValue(newValue);
        setIsEmptyPhone(false);
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
                    className={`widget-form__input ${isEmptyPhone ? 'widget-form__input_empty' : ''}`}
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