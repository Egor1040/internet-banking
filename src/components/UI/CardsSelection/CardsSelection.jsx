import './cardsSelection.scss';
import { useState } from 'react';
import { CustomerCard } from '../CustomerCard/CustomerCard';
import { MyWallet } from '../../MyWallet/MyWallet';
import RenderElement from '../../../utils/hocs/RenderElement';
import { useSelector } from 'react-redux';

export const CardsSelection = ({ title, toggleElemVisibility, idSelection, openedSelection, setDataForTransfer, dataForTransfer, setCardSame }) => {
    const customersCards = useSelector(state => state.customersCards.customersCards);
    const [indexCard, setIndexCard] = useState(0);
    const currentCard = customersCards[indexCard];

    const btnClickHandler = () => {
        toggleElemVisibility(idSelection);
    }

    const chooseCard = (id) => {
        setIndexCard(id);
        setCardSame(false);
        idSelection === 1 ? setDataForTransfer({ ...dataForTransfer, from: customersCards[id].number }) : setDataForTransfer({ ...dataForTransfer, to: customersCards[id].number });
    }

    return (
        <div className="cards-selection">
            <div className="cards-selection__option">
                <MyWallet titleText={title} />
            </div>

            <div className="card-selection__card" onClick={btnClickHandler}>
                <div className="card-selection__img">
                    <img src={`img/icons/cards/${currentCard.id}.png`} alt="cardbackground" />
                </div>
                <div className="card-selection__block">
                    <div className='card-selection__first-descr'>
                        <div className="card-selection__end-number">* {currentCard.number.slice(-4)}</div>
                        <div className="card-selection__name-card">{currentCard.nameCard.slice(0, 15)}...</div>
                    </div>
                    <div className="card-selection__balance">{currentCard.balance} UAH</div>
                </div>
                <div className='card-selection__arrow-down'>
                    <img src="img/icons/arrow.svg" alt="arrow" />
                </div>
            </div>

            <RenderElement data={openedSelection}>
                <div className='card-selection__selections'>
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