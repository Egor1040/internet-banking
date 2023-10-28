import './confirmButton.scss';

export const ConfirmButton = ({ action }) => {
    return (
        <div className='confirm-button'>
            <div className="confirm-button__terms-use">
                Натискаючи кнопку "{action}" Ви приймаєте умови
                <span> користування сервісом</span>
            </div>
            <button className='confirm-button__confirmation' type='submit'>{action}</button>
        </div>
    );
};