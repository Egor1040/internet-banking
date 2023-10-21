import './cardDetails.scss';
import { useState } from 'react';
import { InformationBoard } from '../InformationBoard/InformationBoard';
import { FastTransferCard } from '../Forms/FastTransferCard/FastTransferCard';

export const CardDetails = () => {
    const [currentCurd, setCurrentCurd] = useState({
        number: '',
        expiryData: '',
        CVV: '',
    });
    const [test, setTest] = useState({
        number: '',
        expiryData: '',
        CVV: '',
    });
    
    return (
        <div className="card-details">

            <FastTransferCard
                isWidget={false}
                cardNumber={currentCurd.number}
                setCurrentCurd={setCurrentCurd}
                setTest={setTest}
            />

            <div className='card-details__bottom-block'>
                <div className="card-details__field">
                    <div className="card-details__title">Термін дії</div>
                    <input
                        type="text"
                        placeholder='01 / 20'
                        className='card-details__input'
                        onChange={e => setTest({ expiryData: e.target.value })}
                        value={currentCurd.expiryData}
                    />
                </div>
                <div className="card-details__field card-details__field_position">
                    <div className="card-details__title">CVV-код</div>
                    <label className='card-details__label'>
                        <input
                            type="text"
                            className='card-details__input card-details__input_color'
                            placeholder='● ● ●'
                            onChange={e => setTest({ CVV: e.target.value })}
                            value={currentCurd.CVV}
                        />

                        <InformationBoard />

                    </label>
                </div>
            </div>
        </div>
    );
};