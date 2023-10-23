import { ServicesMenu } from '../../ServicesMenu/ServicesMenu/ServicesMenu';
import { VideoWidget } from '../VideoWidget/VideoWidget';
import './servicesWidget.scss';

export const ServicesWidget = () => {
    return (
        <>
            <ServicesMenu />

            <div className="services-widget">

                <VideoWidget />

            </div>
        </>
    );
};