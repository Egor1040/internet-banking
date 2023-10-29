import './starterContent.scss';
import { ServicesMenu } from '../../components';
import MainSlider from '../../components/MainSlider/MainSlider';

export const StarterContent = () => {
    return (
        <div className='starter-content'>
            <ServicesMenu />

            <MainSlider/>
        </div>
    );
};