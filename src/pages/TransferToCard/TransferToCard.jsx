import '../TransferToCard/transferToCard.scss';
import { useState } from 'react';
import { AmountField, CardsSelection } from '../../components';
import data from '../../data/data.json';
import { useDispatch } from 'react-redux';
import { addHistoryTransfer } from '../../store/historyCardSlice';

export const TransferToCard = () => {
    const dispatch = useDispatch();
    const [dataForTransfer, setDataForTransfer] = useState({
        from: data.customerCards[0].id,
        to: data.customerCards[0].id,
        sum: '',
    });
    const [cardSame, setCardSame] = useState();
    const [isElemVisible, setElemVisible] = useState([
        { id: 1, opened: false },
        { id: 2, opened: false },
    ]);

    const toggleElemVisibility = (id) => {
        setElemVisible(
            isElemVisible.map(elemVisible => elemVisible.id === id ? { ...elemVisible, opened: !elemVisible.opened } : { ...elemVisible, opened: false })
        )
    }

    const addCardTransfer = (e) => {
        e.preventDefault();

        dataForTransfer.from === dataForTransfer.to ? setCardSame(true) : setCardSame(false)
        if(cardSame) return; 
        if (!dataForTransfer.sum) return;
        
        dispatch(addHistoryTransfer(dataForTransfer))
    }

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
                    <div className="transfer-form__card">
                        <CardsSelection
                            title="З картки"
                            idSelection={isElemVisible[0].id}
                            openedSelection={isElemVisible[0].opened}
                            toggleElemVisibility={toggleElemVisibility}
                            dataForTransfer={dataForTransfer}
                            setDataForTransfer={setDataForTransfer}
                            setCardSame={setCardSame}
                        />
                    </div>

                    <div className="transfer-form__card">
                        <CardsSelection
                            title="Картка одержувача"
                            idSelection={isElemVisible[1].id}
                            openedSelection={isElemVisible[1].opened}
                            toggleElemVisibility={toggleElemVisibility}
                            dataForTransfer={dataForTransfer}
                            setDataForTransfer={setDataForTransfer}
                            setCardSame={setCardSame}
                        />
                    </div>
                    <div className='transfer-form__error-same'>
                        {cardSame && "Карта відправника і одержувача збігаються"}
                    </div>
                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
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
            </div>
        </div>
    );
};