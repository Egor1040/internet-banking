import { Link } from 'react-router-dom';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import './servicesSubmenu.scss';

export const ServicesSubmenu = ({ subMenu }) => {
    return (
        <div className="services-submenu">
            {
                subMenu.map(({ title, titleIcon, link }) => (
                    <Link to={`${link}`} key={crypto.randomUUID()}>
                        <ServiceItem
                            title={title}
                            titleIcon={titleIcon}
                        />
                    </Link>
                ))
            }
        </div>
    );
};