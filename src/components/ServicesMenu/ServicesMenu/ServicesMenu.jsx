import './servicesMenu.scss';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import { servicesItemData } from '../ServicesData/servicesItemData';

export const ServicesMenu = ({ isActive }) => {
    return (
        <div className={`services-menu ${isActive ? 'services-menu_active' : ''}`}>
            {
                servicesItemData.map(({ title, titleIcon, subMenu }) => (
                    <ServiceItem
                        key={crypto.randomUUID()}
                        title={title}
                        titleIcon={titleIcon}
                        subMenu={subMenu}
                    />
                ))
            }
        </div>
    );
};