import './servicesSubmenu.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToolsDropDownMenu from '../../../utils/context/ToolsDropDownMenu';
import { ServiceItem } from '../ServiceItem/ServiceItem';

export const ServicesSubmenu = ({ subMenu }) => {
    const { setIsActiveMenu } = useContext(ToolsDropDownMenu);

    const handlerMenu = () => {
        setIsActiveMenu(false);
    }

    return (
        <div className="services-submenu">
            {
                subMenu.map(({ title, titleIcon, link }) => (
                    <Link
                        to={`${link}`}
                        key={crypto.randomUUID()}
                        onClick={handlerMenu}
                    >
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