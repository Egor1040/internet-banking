import { InformationBoard } from '../../InformationBoard/InformationBoard';
import { FastTransferCard } from '../FastTransferCard/FastTransferCard';
import './cardForm.scss';

export const CardForm = () => {
    return (
        <div className="card-form">
            <div className="card-form__header">
                <div className="card-form__title">З картки</div>
                <div className="card-form__wallet">
                    <div className="card-form__wallet-title">Мій гаманець</div>
                    <div className="card-form__wallet-icon">
                        <img src="./img/icons/wallet.svg" alt="wallet" />
                    </div>
                </div>
            </div>
            <div className="card-details">
                <div className="card-details__field">
                    <div className="card-details__title">Номер картки</div>

                    <FastTransferCard isButton={false} />

                </div>
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

                            <InformationBoard />

                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};