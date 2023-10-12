import './serviceWidget.scss';

export const ServiceWidget = ({ children, title, titleIcon, arrowIcon, descr }) => {

    return (
        <div className="service-widget">
            <div className="service-widget__header">
                <div className="service-widget__title-icon">
                    <img src={`img/icons/${titleIcon}`} alt='multicolor-card' />
                </div>
                <h2 className="service-widget__title">{title}</h2>
                {
                    arrowIcon
                        ?
                        <div className="service-widget__arrow-icon">
                            <img src={`img/icons/${arrowIcon}`} alt="arrow" />
                        </div>
                        :
                        false
                }
            </div>

            {children}

            {
                descr
                    ?
                    <div className="service-widget__footer">
                        <div className="service-widget__description">{descr}</div>
                    </div>
                    :
                    false
            }
        </div>
    );
};