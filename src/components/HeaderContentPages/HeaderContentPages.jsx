import './headerContentPages.scss';

export const HeaderContentPages = () => {
    return (
        <div className="header-pages">
            <div className='header-pages__headline'>
                <div className="header-pages__title-icon">
                    <img src="img/icons/icons-with-bg/phone.svg" alt="phone" />
                </div>
                <div className='header-pages__text'>
                    <h2 className="header-pages__title">Поповнення</h2>
                    <div className="header-pages__descr">Поповнити мобільний онлайн.</div>
                </div>
            </div>
            <div className="header-pages__icons-operators">
                <div className="header-pages__icon-operator">
                    <img src="./img/icons/operators/kyivstar.svg" alt="kyivstar" />
                </div>
                <div className="header-pages__icon-operator">
                    <img src="./img/icons/operators/lifecel.svg" alt="lifecel" />
                </div>
                <div className="header-pages__icon-operator">
                    <img src="./img/icons/operators/3-mob.svg" alt="3-mob" />
                </div>
                <div className="header-pages__icon-operator">
                    <img src="./img/icons/operators/vodafone.svg" alt="vodafone" />
                </div>
                <div className="header-pages__icon-operator">
                    <img src="./img/icons/operators/intertelecom.svg" alt="intertelecom" />
                </div>
            </div>
        </div>
    );
};