import './cardSelection.scss';
import { CustomerCard } from '../CustomerCard/CustomerCard';
import data from '../../../data/data.json';

export const CardsSelection = ({ setCurrentCurd }) => {
    return (
        <div className="cards-selection">
            {
                data.customerCards.map(card => <CustomerCard
                    key={crypto.randomUUID()}
                    data={card}
                    setCurrentCurd={setCurrentCurd}
                />)
            }
        </div>
    );
};