import './videoWidget.scss';

export const VideoWidget = () => {
    return (
        <div className='video-widget'>
            <video controls loop width='100%'>
                <source src='./img/video/online-payment.mp4' type='video/mp4' />
                Твій браузер не підтримує відео, раджу оновити його!
            </video>
        </div>
    );
};