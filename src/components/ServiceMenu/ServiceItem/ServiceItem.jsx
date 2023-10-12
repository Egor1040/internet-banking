import './serviceItem.scss';

export const ServiceItem = ({ children, title, icon }) => {
    return (
        <div className="service-item">
            <div className="service-item__main-icon">
                <img src={`img/icons/${icon}`} alt="arrows" />
            </div>
            <div className="service-item__title">{title}</div>
            {children}
        </div>
    );
};