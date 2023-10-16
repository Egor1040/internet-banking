import './fastRequisitesPay.scss';
import { WidgetButton } from '../../Buttons/WidgetButton/WidgetButton';
import RenderElement from '../../../../utils/hocs/RenderElement';

export const FastRequisitesPay = ({ isButton }) => {
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

            <RenderElement data={isButton}>
                <WidgetButton />
            </RenderElement>

        </form>
    );
};