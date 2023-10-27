import './confirmationMark.scss';

export const ConfirmationMark = () => {
    return (
        <div className="confirmation-mark">
            <div className="confirmation-mark__icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
        </div>
    );
};