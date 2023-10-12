import { ServicesMenu, ServicesWidget } from '../../components';
import './main.scss';

const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='main-content'>

                    <ServicesMenu />

                    <ServicesWidget />

                </div>
            </div>
        </main>
    );
};

export default Main;