import './rechargeMobile.scss';
import { useEffect, useState } from 'react';
import { AmountField, CardsSelection, FastRechargeMobile, HeaderTransferPages, SuccessCheck, TotalAmount } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

import { useDispatch, useSelector } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';
import { topUpMobile } from '../../store/customersCardsSlice';

export const RechargeMobile = () => {
    const dispatch = useDispatch();
    const customersCards = useSelector(state => state.customersCards.customersCards);

    const [successCheck, setSuccessCheck] = useState(false);
    const [dataForTransfer, setDataForTransfer] = useState({
        from: customersCards[0].number,
        to: '',
        sum: '',
    });

    const { toggleElemVisibility, firstElementVisible } = useToggleElements();
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isEmptyPhone, setIsEmptyPhone] = useState(false);

    const addCardTransfer = (e) => {
        e.preventDefault();

        if (dataForTransfer.to.length < 13) {
            setIsEmptyPhone(true);
            return;
        }

        if (!dataForTransfer.sum || dataForTransfer.sum.slice(0, 1) === '-') {
            setIsEmptyInput(true);
            return;
        };

        dispatch(addHistoryTransfer(dataForTransfer));
        dispatch(topUpMobile(dataForTransfer));
        setDataForTransfer({ ...dataForTransfer, to: '', sum: '' });
        setSuccessCheck(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSuccessCheck(false);
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, [successCheck]);

    return (
        <div className='recharge-mobile'>

            <HeaderTransferPages />

            <div className="recharge-main">
                <form onSubmit={addCardTransfer} className="recharge-form">
                    <div className='recharge-form__mobile'>
                        <div className="recharge-form__title-mobile">Номер</div>

                        <FastRechargeMobile
                            isButton={false}
                            dataForTransfer={dataForTransfer}
                            setDataForTransfer={setDataForTransfer}
                            isEmptyPhone={isEmptyPhone}
                            setIsEmptyPhone={setIsEmptyPhone}
                        />

                    </div>

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setIsEmptyInput={setIsEmptyInput}
                        isEmptyInput={isEmptyInput}
                    />

                    <CardsSelection
                        title={'З картки'}
                        idSelection={firstElementVisible.id}
                        openedSelection={firstElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                    />

                    <div className="recharge-form__terms-use">
                        Натискаючи кнопку "Поповнити" Ви приймаєте умови
                        <span> користування сервісом</span>
                    </div>
                    <button className='recharge-form__confirmation' type='submit'>Поповнити</button>
                </form>
                <div className="recharge-main__img-decor">
                    <img src="./img/city.svg" alt="city" />
                </div>

                <RenderElement data={successCheck}>
                    <SuccessCheck />
                </RenderElement>

            </div>
        </div>
    );
};