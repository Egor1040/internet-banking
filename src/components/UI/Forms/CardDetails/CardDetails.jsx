import './cardDetails.scss';
import { CardField } from '../CardField/CardField';

export const CardDetails = () => {
    return (
        <div className="card-details">

            <CardField isWidget={false} />

            <div className='card-details__bottom-block'>
                <div className="card-details__field">
                    <div className="card-details__title">Термін дії</div>
                    <input
                        type="text"
                        placeholder='01 / 20'
                        className='card-details__input'
                    />
                </div>
                <div className="card-details__field card-details__field_position">
                    <div className="card-details__title">CVV-код</div>
                    <label className='card-details__label'>
                        <input
                            type="text"
                            className='card-details__input card-details__input_color'
                            placeholder='● ● ●'
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};