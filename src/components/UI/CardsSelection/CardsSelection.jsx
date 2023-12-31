import './cardsSelection.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderElement from '../../../utils/hocs/RenderElement';
import { CustomerCard } from '../CustomerCard/CustomerCard';
import { WalletSelection } from '../WalletSelection/WalletSelection';

export const CardsSelection = ({ title, toggleElemVisibility, idSelection, openedSelection, setDataForTransfer, setCorrectData = false }) => {
    const customersCards = useSelector(state => state.customersCards.customersCards);
    const [idCard, setIdCard] = useState(1);
    const currentCard = customersCards.find(card => card.id === idCard);

    const btnClickHandler = () => {
        toggleElemVisibility(idSelection);
    }

    const chooseCard = (id) => {
        setIdCard(id);

        idSelection === 1
            ? setDataForTransfer(prev => ({ ...prev, from: customersCards[id - 1].number }))
            : setDataForTransfer(prev => ({ ...prev, to: customersCards[id - 1].number }));

            setCorrectData && setCorrectData(prev => ({ ...prev, identicalCard: false}));
        toggleElemVisibility(idSelection);
    }

    return (
        <div className="cards-selection">
            <WalletSelection titleText={title} />

            <div className="cards-selection__card" onClick={btnClickHandler}>
                <div className="cards-selection__img">
                    <img src={`img/icons/cards/${currentCard.id}.png`} alt="cardbackground" />
                </div>
                <div className="cards-selection__block">
                    <div className='cards-selection__first-descr'>
                        <div className="cards-selection__end-number">* {currentCard.number.slice(-4)}</div>
                        <div className="cards-selection__name-card">{currentCard.nameCard.slice(0, 15)}...</div>
                    </div>
                    <div className="cards-selection__balance">{currentCard.balance} UAH</div>
                </div>
                <div className='cards-selection__arrow-down'>
                    <img src="img/icons/arrow.svg" alt="arrow" />
                </div>
            </div>

            <RenderElement data={openedSelection}>
                <div className='cards-selection__selections'>
                    {
                        customersCards.map(card => <CustomerCard
                            key={crypto.randomUUID()}
                            data={card}
                            chooseCard={chooseCard}
                        />)
                    }
                </div>
            </RenderElement>

        </div>
    );
};