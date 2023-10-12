import RenderElement from '../../../utils/hocs/RenderElement';
import './serviceItem.scss';

export const ServiceItem = ({ children, title, titleIcon, arrowIcon }) => {
    return (
        <div className="service-item">
            <div className="service-item__title-icon">
                <img src={`img/icons/${titleIcon}`} alt="arrows" />
            </div>
            <div className="service-item__title">{title}</div>

            {children}

            <RenderElement data={arrowIcon}>
                <div className="service-item__arrow-icon">
                    <img src={`img/icons/${arrowIcon}`} alt="arrow" />
                </div>
            </RenderElement>

        </div>
    );
};