import './headerTransferPages.scss';

export const HeaderTransferPages = () => {
    return (
        <div className="recharge-header">
            <div className='recharge-header__headline'>
                <div className="recharge-header__title-icon">
                    <img src="img/icons/icons-with-bg/phone.svg" alt="phone" />
                </div>
                <div className='recharge-header__text'>
                    <h2 className="recharge-header__title">Поповнення</h2>
                    <div className="recharge-header__descr">Поповнити мобільний онлайн.</div>
                </div>
            </div>
            <div className="recharge-header__icons-operators">
                <div className="recharge-header__icon-operator">
                    <img src="./img/icons/operators/kyivstar.svg" alt="kyivstar" />
                </div>
                <div className="recharge-header__icon-operator">
                    <img src="./img/icons/operators/lifecel.svg" alt="lifecel" />
                </div>
                <div className="recharge-header__icon-operator">
                    <img src="./img/icons/operators/3-mob.svg" alt="3-mob" />
                </div>
                <div className="recharge-header__icon-operator">
                    <img src="./img/icons/operators/vodafone.svg" alt="vodafone" />
                </div>
                <div className="recharge-header__icon-operator">
                    <img src="./img/icons/operators/intertelecom.svg" alt="intertelecom" />
                </div>
            </div>
        </div>
    );
};