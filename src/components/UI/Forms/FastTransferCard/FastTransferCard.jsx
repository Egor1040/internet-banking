import './fastTransferCard.scss';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import RenderElement from '../../../../utils/hocs/RenderElement';
import { useState } from 'react';

export const FastTransferCard = ({ isWidget }) => {
    return (
        <div className='transfer-card'
            style={{ backgroundColor: isWidget ? '#212121' : '#303030' }}
        >

            <RenderElement data={!isWidget}>
                <div className="card-details__title">Номер картки</div>
            </RenderElement>

            <div className="widget-form">
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

                <RenderElement data={isWidget}>
                    <WidgetButton />
                </RenderElement>

            </div>
        </div>
    );
};