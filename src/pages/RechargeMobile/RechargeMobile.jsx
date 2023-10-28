import './rechargeMobile.scss';
import { AmountField, CardsSelection, MobileField, HeaderContentPages, ConfirmMark, ConfirmButton, ErrorText } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';
import useToggleElements from '../../utils/hooks/useToggleElements';

import { useSelector } from 'react-redux';
import useCardOperations from '../../utils/hooks/useCardOperations';

export const RechargeMobile = () => {
    const { toggleElemVisibility, firstElementVisible } = useToggleElements();
    const customersCards = useSelector(state => state.customersCards.customersCards);
    const initialData = {
        from: customersCards[0].number,
        to: '',
        sum: '',
    }

    const {
        dataForTransfer,
        setDataForTransfer,
        correctData,
        setCorrectData,
        handleOperation,
        confirmOperation,
    } = useCardOperations(initialData);

    const addCardTransfer = handleOperation('rechargeMobile', customersCards);
    const {negativeBalance, emptyAmount, emptyMobile} = correctData;

    return (
        <div className='recharge-mobile'>

            <HeaderContentPages />

            <div className="recharge-main">
                <form onSubmit={addCardTransfer} className="recharge-form">

                    <MobileField
                        isButton={false}
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        emptyMobile={emptyMobile}
                        setCorrectData={setCorrectData}
                    />

                    <AmountField
                        dataForTransfer={dataForTransfer}
                        setDataForTransfer={setDataForTransfer}
                        emptyAmount={emptyAmount}
                        setCorrectData={setCorrectData}
                    />

                    <CardsSelection
                        title={'З картки'}
                        idSelection={firstElementVisible.id}
                        openedSelection={firstElementVisible.opened}
                        toggleElemVisibility={toggleElemVisibility}
                        setDataForTransfer={setDataForTransfer}
                    />

                    <ErrorText
                        negativeBalance={negativeBalance}
                    />

                    <ConfirmButton action={'Поповнити'} />

                </form>
                <div className="recharge-main__img-decor">
                    <img src="./img/city.svg" alt="city" />
                </div>

                <RenderElement data={confirmOperation}>
                    <ConfirmMark />
                </RenderElement>

            </div>
        </div>
    );
};