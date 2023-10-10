const ServiceMenu = () => {
    return (
        <div className="service-menu">
            <div className="service-items">
                <div className="service-item">
                    <div className="service-item__main-icon">
                        <img src="img/icons/icons-with-bg/arrows.svg" alt="arrows" />
                    </div>
                    <div className="service-item__title">Перекази</div>
                    <div className="service-item__icon-arrow">
                        <img src="img/icons/arrow.svg" alt="arrow" />
                    </div>
                    <div className="service-submenu">
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/icons-with-bg/card.svg" alt="card" />
                            </div>
                            <div className="service-item__title">Перекази на картку</div>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-item__main-icon">
                        <img src="img/icons/icons-with-bg/hryvnia.svg" alt="hryvnia" />
                    </div>
                    <div className="service-item__title">Платежі</div>
                    <div className="service-item__icon-arrow">
                        <img src="img/icons/arrow.svg" alt="arrow" />
                    </div>
                    <div className="service-submenu">
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/icons-with-bg/communal.svg" alt="communal" />
                            </div>
                            <div className="service-item__title">Комунальні платежі</div>
                        </div>
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/icons-with-bg/wifi.svg" alt="wifi" />
                            </div>
                            <div className="service-item__title">Інтернет та ТБ</div>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-item__main-icon">
                        <img src="img/icons/icons-with-bg/communication.svg" alt="communication" />
                    </div>
                    <div className="service-item__title">Зв'язок</div>
                    <div className="service-item__icon-arrow">
                        <img src="img/icons/arrow.svg" alt="arrow" />
                    </div>
                    <div className="service-submenu">
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/icons-with-bg/phone.svg" alt="phone" />
                            </div>
                            <div className="service-item__title">Поповнення мобільного</div>
                        </div>
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/counterparties/ukrtelecom.svg" alt="phone" />
                            </div>
                            <div className="service-item__title">Укртелеком</div>
                        </div>
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/counterparties/triolan.svg" alt="triolan" />
                            </div>
                            <div className="service-item__title">Тріолан</div>
                        </div>
                        <div className="service-item">
                            <div className="service-item__main-icon">
                                <img src="img/icons/counterparties/volia.svg" alt="volia" />
                            </div>
                            <div className="service-item__title">Воля</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceMenu;