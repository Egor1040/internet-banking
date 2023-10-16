import './fastTransferCard.scss';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import RenderElement from '../../../../utils/hocs/RenderElement';

export const FastTransferCard = ({ isButton }) => {
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

            <RenderElement data={isButton}>
                <WidgetButton />
            </RenderElement>

        </form>
    );
};