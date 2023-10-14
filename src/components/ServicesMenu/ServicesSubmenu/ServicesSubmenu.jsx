import { ServiceItem } from '../ServiceItem/ServiceItem';
import './servicesSubmenu.scss';

export const ServicesSubmenu = ({ subMenu }) => {
    return (
        <div className="services-submenu">
            {
                subMenu.map(({ title, titleIcon }) => (
                    <ServiceItem
                        key={crypto.randomUUID()}
                        title={title}
                        titleIcon={titleIcon}
                    />
                ))
            }
        </div>
    );
};