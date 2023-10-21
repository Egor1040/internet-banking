import './cardsSelection.scss';
import { CustomerCard } from '../CustomerCard/CustomerCard';
import data from '../../../data/data.json';
import { MyWallet } from '../../MyWallet/MyWallet';
import { useState } from 'react';
import RenderElement from '../../../utils/hocs/RenderElement';

export const CardsSelection = ( {title} ) => {
    const [switcher, setSwitсher] = useState(false);
    const [indexCard, setIndexCard] = useState(0);
    
    const btnClickHandler = () => {
        setSwitсher(!switcher);
    }

    const chooseCard = (id) => {
        setIndexCard(id);
    }

    return (
        <div className="cards-selection">
            <div className="cards-selection__option">
                    <MyWallet titleText={ title }/>
            </div>

            <div className="card-selection__card" onClick={btnClickHandler}>
                <div className="card-selection__img">
                    <img src="img/icons/cards/mc_kdv.png" alt="cardbackground" />
                </div>
                <div className="card-selection__block">
                    <div className='card-selection__first-descr'>
                        <div className="card-selection__end-number">* {data.customerCards[indexCard].number.slice(-4)}</div>
                        <div className="card-selection__name-card">{data.customerCards[indexCard].nameCard.slice(0,15)}...</div>
                    </div>
                    <div className="card-selection__balance">{data.customerCards[indexCard].balance} UAH</div>
                </div>
                <div className='card-selection__arrow-down'>
                    <img src="img/icons/arrow.svg" alt="arrow" />
                </div>
            </div>

            <RenderElement data={switcher}>
                <div className='card-selection__selections'>
                    {data.customerCards.map(card => <CustomerCard
                            key={crypto.randomUUID()}
                            data={card}
                            chooseCard={chooseCard}
                    />)}
                </div>
            </RenderElement>

        </div>
    );
};