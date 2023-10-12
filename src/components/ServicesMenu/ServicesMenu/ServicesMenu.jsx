import { ServiceItem } from '../ServiceItem/ServiceItem';
import { ServicesSubmenu } from '../ServicesSubmenu/ServicesSubmenu';
import './servicesMenu.scss';

export const ServicesMenu = () => {
    return (
        <div className="services-menu">
            <ServiceItem
                title={'Перекази'}
                titleIcon={'icons-with-bg/arrows.svg'}
                arrowIcon={'arrow.svg'}
            >
                <ServicesSubmenu>
                    <ServiceItem
                        title={'Перекази на картку'}
                        titleIcon={'icons-with-bg/card.svg'}
                    />
                </ServicesSubmenu>
            </ServiceItem>
            <ServiceItem
                title={'Платежі'}
                titleIcon={'icons-with-bg/hryvnia.svg'}
                arrowIcon={'arrow.svg'}
            >
                <ServicesSubmenu>
                    <ServiceItem
                        title={'Комунальні платежі'}
                        titleIcon={'icons-with-bg/communal.svg'}
                    />
                    <ServiceItem
                        title={'Інтернет та ТБ'}
                        titleIcon={'icons-with-bg/wifi.svg'}
                    />
                </ServicesSubmenu>
            </ServiceItem>
            <ServiceItem
                title={'Зв\'язок'}
                titleIcon={'icons-with-bg/communication.svg'}
                arrowIcon={'arrow.svg'}
            >
                <ServicesSubmenu>
                    <ServiceItem
                        title={'Поповнення мобільного'}
                        titleIcon={'icons-with-bg/phone.svg'}
                    />
                    <ServiceItem
                        title={'Укртелеком'}
                        titleIcon={'counterparties/ukrtelecom.svg'}
                    />
                    <ServiceItem
                        title={'Тріолан'}
                        titleIcon={'counterparties/triolan.svg'}
                    />
                    <ServiceItem
                        title={'Воля'}
                        titleIcon={'counterparties/volia.svg'}
                    />
                </ServicesSubmenu>
            </ServiceItem>
        </div>
    );
};