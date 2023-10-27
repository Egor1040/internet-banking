import './rechargeMobile.scss';
import { useEffect, useState } from 'react';
import { AmountField, CardsSelection, MobileField, HeaderContentPages, ConfirmationMark } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

import { useDispatch, useSelector } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';
import { topUpMobile } from '../../store/customersCardsSlice';

export const RechargeMobile = () => {
    const dispatch = useDispatch();
    const customersCards = useSelector(state => state.customersCards.customersCards);

    const [confirmationOperation, setConfirmationOperation] = useState(false);
    const [dataForTransfer, setDataForTransfer] = useState({
        from: customersCards[0].number,
        to: '',
        sum: '',
    });
    const currentCard = customersCards.find(el => el.number === dataForTransfer.from);

    const { toggleElemVisibility, firstElementVisible } = useToggleElements();
    const [isEmptyAmount, setIsEmptyAmount] = useState(false);
    const [isEmptyPhone, setIsEmptyPhone] = useState(false);
    const [isNegativeBal, setIsNegativeBal] = useState(false);

    const addCardTransfer = (e) => {
        e.preventDefault();

        if (dataForTransfer.to.length < 13) {
            setIsEmptyPhone(true);
            return;
        }

        if (!dataForTransfer.sum || dataForTransfer.sum.slice(0, 1) === '-') {
            setIsEmptyAmount(true);
            return;
        };

        if (currentCard.balance - dataForTransfer.sum < 0) {
            setIsNegativeBal(true);
            return;
        }

        dispatch(addHistoryTransfer(dataForTransfer));
        dispatch(topUpMobile(dataForTransfer));
        setDataForTransfer(prev => ({ ...prev, to: '', sum: '' }));
        setConfirmationOperation(true);
        setIsNegativeBal(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setConfirmationOperation(false);
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, [confirmationOperation]);

    return (
        <div className='recharge-mobile'>

            <HeaderContentPages />

            <div className="recharge-main">
                <form onSubmit={addCardTransfer} className="recharge-form">

                    <MobileField
                        isButton={false}
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        isEmptyPhone={isEmptyPhone}
                        setIsEmptyPhone={setIsEmptyPhone}
                    />

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setIsEmptyAmount={setIsEmptyAmount}
                        isEmptyAmount={isEmptyAmount}
                    />

                    <CardsSelection
                        title={'З картки'}
                        idSelection={firstElementVisible.id}
                        openedSelection={firstElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        setDataForTransfer={setDataForTransfer}
                    />

                    <div className='recharge-form__error-same'>
                        {isNegativeBal && "Недостатньо коштів для проведення платежу"}
                    </div>

                    <div className="recharge-form__terms-use">
                        Натискаючи кнопку "Поповнити" Ви приймаєте умови
                        <span> користування сервісом</span>
                    </div>
                    <button className='recharge-form__confirmation' type='submit'>Поповнити</button>
                </form>
                <div className="recharge-main__img-decor">
                    <img src="./img/city.svg" alt="city" />
                </div>

                <RenderElement data={confirmationOperation}>
                    <ConfirmationMark />
                </RenderElement>

            </div>
        </div>
    );
};