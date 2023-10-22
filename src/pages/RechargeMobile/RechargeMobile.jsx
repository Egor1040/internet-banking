import { useState } from 'react';
import { AmountField, CardsSelection, FastRechargeMobile, HeaderTransferPages, TotalAmount } from '../../components';
import './rechargeMobile.scss';

import { useDispatch } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';

export const RechargeMobile = () => {
    const dispatch = useDispatch();
    const [dataForTransfer, setDataForTransfer] = useState({
        from: '',
        to: '',
        sum: '',
    });

    const [isElemVisible, setElemVisible] = useState([
        { id: 1, opened: false },
    ]);

    const toggleElemVisibility = (id) => {
        setElemVisible(
            isElemVisible.map(elemVisible => elemVisible.id === id ? { ...elemVisible, opened: !elemVisible.opened } : { ...elemVisible, opened: false })
        )
    }

    const addCardTransfer = (e) => {
        e.preventDefault();

        if (!dataForTransfer.sum) return;
        
        dispatch(addHistoryTransfer(dataForTransfer))
    }

    return (
        <div className='recharge-mobile'>

            <HeaderTransferPages />

            <div className="recharge-main">
                <form onSubmit={addCardTransfer} className="recharge-form">
                    <div className='recharge-form__mobile'>
                        <div className="recharge-form__title-mobile">Номер</div>

                        <FastRechargeMobile isButton={false} />

                    </div>

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                    />

                    <TotalAmount />

                    <CardsSelection
                        title={'З картки'}
                        idSelection={isElemVisible[0].id}
                        openedSelection={isElemVisible[0].opened}
                        toggleElemVisibility={toggleElemVisibility}
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                    />

                    <div className="recharge-form__terms-use">
                        Натискаючи кнопку "Поповнити" Ви приймаєте умови
                        <span> користування сервісом</span>
                    </div>
                    <button className='recharge-form__confirmation' type='submit'>Додати в кошик</button>
                </form>
                <div className="recharge-main__img-decor">
                    <img src="./img/city.svg" alt="city" />
                </div>
            </div>
        </div>
    );
};