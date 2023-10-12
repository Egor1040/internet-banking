import './widgetButton.scss';

export const WidgetButton = () => {
    return (
        <button className="widget-button">
            <div className="widget-button__icon-arrow">
                <img src="img/icons/arrow.svg" alt="arrow" />
            </div>
        </button>
    );
};