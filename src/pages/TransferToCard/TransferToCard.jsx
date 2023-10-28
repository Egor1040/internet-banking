import '../TransferToCard/transferToCard.scss';
import { AmountField, CardsSelection, ConfirmButton, ConfirmMark, ErrorText } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

import { useSelector } from 'react-redux';
import useCardOperations from '../../utils/hooks/useCardOperations';

export const TransferToCard = () => {
    const customersCards = useSelector(state => state.customersCards.customersCards);

    const initialArr = {
        from: customersCards[0].number,
        to: customersCards[0].number,
        sum: '',
    };
    const { dataForTransfer,
            setDataForTransfer,
            correctData,
            setCorrectData,
            handleOperation,
            confirmOperation,} = useCardOperations(initialArr);

    const { toggleElemVisibility, firstElementVisible, secondElementVisible } = useToggleElements();

    const addCardTransfer = handleOperation('transferToCard', customersCards);
    const { negativeBalance, emptyAmount, identicalCard } = correctData;

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
                        setCorrectData={setCorrectData}
                    />

                    <CardsSelection
                        title="Картка одержувача"
                        idSelection={secondElementVisible.id}
                        openedSelection={secondElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        setDataForTransfer={setDataForTransfer}
                        setCorrectData={setCorrectData}
                    />

                    <ErrorText negativeBalance={negativeBalance} sameCard={identicalCard}/>

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        setCorrectData={setCorrectData}
                        emptyAmount={emptyAmount}
                    />

                    <ConfirmButton action={'Поповнення'}/>
                </form>
                <div className="transfer-main__img">
                    <img src="img/arms-with-phone.svg" alt="ads-mobile" />
                </div>

                <RenderElement data={confirmOperation}>
                    <ConfirmMark />
                </RenderElement>

            </div>
        </div>
    );
};