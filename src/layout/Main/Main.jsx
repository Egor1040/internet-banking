import { Outlet } from 'react-router';
import { SupportChat } from '../../components';
import './main.scss';

export const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='main-content'>

                    <Outlet />

                    <SupportChat />

                </div>
            </div>
        </main>
    );
};