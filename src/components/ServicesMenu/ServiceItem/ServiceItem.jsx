import './serviceItem.scss';
import RenderElement from '../../../utils/hocs/RenderElement';
import { ServicesSubmenu } from '../ServicesSubmenu/ServicesSubmenu';

export const ServiceItem = ({ title, titleIcon, subMenu }) => {

    return (
        <div className="service-item">
            <div className="service-item__title-icon">
                <img src={`img/icons/${titleIcon}`} alt="arrows" />
            </div>
            <div className="service-item__title">{title}</div>

            <RenderElement data={subMenu}>
                <div className="service-item__arrow-icon">
                    <img src='img/icons/arrow.svg' alt="arrow" />
                </div>

                <ServicesSubmenu subMenu={subMenu} />

            </RenderElement>

        </div>

    );
};