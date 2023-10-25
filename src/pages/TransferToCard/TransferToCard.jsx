import '../TransferToCard/transferToCard.scss';
import { useEffect, useState } from 'react';
import { AmountField, CardsSelection, SuccessCheck } from '../../components';
import data from '../../data/data.json';
import { useDispatch } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

export const TransferToCard = () => {
    const dispatch = useDispatch();
    const [successCheck, setSuccessCheck] = useState(false);
    const [dataForTransfer, setDataForTransfer] = useState({
        from: data.customerCards[0].id,
        to: data.customerCards[0].id,
        sum: '',
    });

    const { toggleElemVisibility, firstElementVisible, secondElementVisible } = useToggleElements();

    const [cardSame, setCardSame] = useState();
    const [isEmptyInput, setIsEmptyInput] = useState(false);

    const addCardTransfer = (e) => {
        e.preventDefault();

        dataForTransfer.from === dataForTransfer.to ? setCardSame(true) : setCardSame(false);
        if (cardSame) return;

        if (!dataForTransfer.sum) {
            setIsEmptyInput(true);
            return;
        };

        dispatch(addHistoryTransfer(dataForTransfer));
        setDataForTransfer({ ...dataForTransfer, sum: '' })
        setIsEmptyInput(false);
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
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setCardSame={setCardSame}
                    />

                    <CardsSelection
                        title="Картка одержувача"
                        idSelection={secondElementVisible.id}
                        openedSelection={secondElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setCardSame={setCardSame}
                    />
                    
                    <div className='transfer-form__error-same'>
                        {cardSame && "Карта відправника і одержувача збігаються"}
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

                <RenderElement data={successCheck}>
                    <SuccessCheck />
                </RenderElement>

            </div>
        </div>
    );
};