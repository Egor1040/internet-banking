import React from 'react';
import '../RecipientCard/resipientCard.scss';

const RecipientCard = () => {
    return (
        <div className='recipient-card'>
            <div className="recipient-card__header">
                <div className="recipient-card__main">
                    <div className="recipient-card__title">Картка одержувача</div>
                    <div style={{color: 'yellow'}}>Інша картка!!!</div>
                </div>
                <div className="recipient-card__detail">
                    
                </div>
            </div>
        </div>
    );
};

export default RecipientCard;