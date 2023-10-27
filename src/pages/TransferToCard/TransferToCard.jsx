import '../TransferToCard/transferToCard.scss';
import { useEffect, useState } from 'react';
import { AmountField, CardsSelection, ConfirmationMark } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

import { useDispatch, useSelector } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';
import { transferBetweenCards } from '../../store/customersCardsSlice';


export const TransferToCard = () => {
    const dispatch = useDispatch();
    const customersCards = useSelector(state => state.customersCards.customersCards);

    const [confirmationOperation, setConfirmationOperation] = useState(false);
    const [dataForTransfer, setDataForTransfer] = useState({
        from: customersCards[0].number,
        to: customersCards[0].number,
        sum: '',
    });
    const currentCard = customersCards.find(el => el.number === dataForTransfer.from);

    const { toggleElemVisibility, firstElementVisible, secondElementVisible } = useToggleElements();
    const [showWarningCardSame, setShowWarningCardSame] = useState(false);
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isNegativeBal, setIsNegativeBal] = useState(false);

    const addCardTransfer = (e) => {
        e.preventDefault();

        if (dataForTransfer.from === dataForTransfer.to) {
            setShowWarningCardSame(true);
            return;
        };

        if (!dataForTransfer.sum || dataForTransfer.sum.slice(0, 1) === '-') {
            setIsEmptyInput(true);
            return;
        };

        if(currentCard.balance - dataForTransfer.sum < 0) {
            setIsNegativeBal(true);
            return;
        }

        dispatch(addHistoryTransfer(dataForTransfer));
        dispatch(transferBetweenCards(dataForTransfer));
        setDataForTransfer(prev => ({ ...prev, sum: '' }));
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
        <div className='transfer-cards'>
            <div className="transfer-header">
                <div className="transfer-header__headline">
                    <div className="transfer-header__title-icon">
                        <img src="img/icons/icons-with-bg/card.svg" alt="card" />
                    </div>
                    <div className="transfer-header__text">
                        <h2 className='transfer-header__title'>Переказ</h2>
                        <div className="transfer-header__descr">
                            Переказ між своїми рахунками, з/на картку VISA/MasterCard
                            інших українських та закордонних банків.
                        </div>
                    </div>
                </div>
                <div className="transfer-header__icons-card">
                    <div className="transfer-header__icon-card">
                        <img src="./img/icons/visa.svg" alt="visa-card" />
                    </div>
                    <div className="transfer-header__icon-card">
                        <img src="./img/icons/mastercard.svg" alt="master-card" />
                    </div>
                </div>
            </div>
            <div className="transfer-main">
                <form onSubmit={addCardTransfer} className="transfer-form">
                    <CardsSelection
                        title="З картки"
                        idSelection={firstElementVisible.id}
                        openedSelection={firstElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        setDataForTransfer={setDataForTransfer}
                        setShowWarningCardSame={setShowWarningCardSame}
                    />

                    <CardsSelection
                        title="Картка одержувача"
                        idSelection={secondElementVisible.id}
                        openedSelection={secondElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        setDataForTransfer={setDataForTransfer}
                        setShowWarningCardSame={setShowWarningCardSame}
                    />

                    <div className='transfer-form__error-same'>
                        {showWarningCardSame && "Карта відправника і одержувача збігаються"}
                        {isNegativeBal && "Недостатньо коштів для проведення платежу"}
                    </div>

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setIsEmptyInput={setIsEmptyInput}
                        isEmptyInput={isEmptyInput}
                    />

                    <div className="transfer-form__prompt">
                        Натискаючи кнопку "Переказати" Ви приймаєте умови
                        <span className='transfer-form__prompt transfer-form__prompt-green'> користування сервісом</span>
                    </div>
                    <button className='transfer-form__confirmation'>Переказати</button>
                </form>
                <div className="transfer-main__img">
                    <img src="img/arms-with-phone.svg" alt="ads-mobile" />
                </div>

                <RenderElement data={confirmationOperation}>
                    <ConfirmationMark />
                </RenderElement>

            </div>
        </div>
    );
};