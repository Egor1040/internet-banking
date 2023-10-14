import { ServiceItem } from '../ServiceItem/ServiceItem';
import { servicesItemData } from '../ServicesData/servicesItemData';
import './servicesMenu.scss';

export const ServicesMenu = () => {
    return (
        <div className="services-menu">
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