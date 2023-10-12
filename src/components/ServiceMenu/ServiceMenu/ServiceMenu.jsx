import { IconArrow } from '../../UI/IconArrow/IconArrow';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import { ServiceSubmenu } from '../ServiceSubmenu/ServiceSubmenu';
import './serviceMenu.scss';

export const ServiceMenu = () => {
    return (
        <div className="service-menu">
            <ServiceItem
                title={'Перекази'}
                icon={'icons-with-bg/arrows.svg'}
            >
                <ServiceSubmenu>
                    <ServiceItem
                        title={'Перекази на картку'}
                        icon={'icons-with-bg/card.svg'}
                    />
                </ServiceSubmenu>
                <IconArrow />
            </ServiceItem>
            <ServiceItem
                title={'Платежі'}
                icon={'icons-with-bg/hryvnia.svg'}
            >
                <ServiceSubmenu>
                    <ServiceItem
                        title={'Комунальні платежі'}
                        icon={'icons-with-bg/communal.svg'}
                    />
                    <ServiceItem
                        title={'Інтернет та ТБ'}
                        icon={'icons-with-bg/wifi.svg'}
                    />
                </ServiceSubmenu>
                <IconArrow />
            </ServiceItem>
            <ServiceItem
                title={'Зв\'язок'}
                icon={'icons-with-bg/communication.svg'}
            >
                <ServiceSubmenu>
                    <ServiceItem
                        title={'Поповнення мобільного'}
                        icon={'icons-with-bg/phone.svg'}
                    />
                    <ServiceItem
                        title={'Укртелеком'}
                        icon={'counterparties/ukrtelecom.svg'}
                    />
                    <ServiceItem
                        title={'Тріолан'}
                        icon={'counterparties/triolan.svg'}
                    />
                    <ServiceItem
                        title={'Воля'}
                        icon={'counterparties/volia.svg'}
                    />
                </ServiceSubmenu>
                <IconArrow />
            </ServiceItem>
        </div>
    );
};