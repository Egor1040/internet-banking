import './errorText.scss';

export const ErrorText = ({ negativeBalance, sameCard = false, }) => {
    return (
        <div className='error-text'>
            {negativeBalance && "Недостатньо коштів для проведення платежу"}
            {sameCard && "Карта відправника і одержувача збігаються"}
        </div>
    );
};