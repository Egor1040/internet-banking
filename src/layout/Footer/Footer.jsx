import './footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="support-info">
                        <div className="support-links">
                            <div className="support-links__item">Історія банку</div>
                            <div className="support-links__item">Умови користування</div>
                            <div className="support-links__item">Новини</div>
                            <div className="support-links__item">Корисні ресурси</div>
                        </div>
                        <div className="support-contacts">
                            <div className="support-contacts__item">
                                <div className="support-contacts__item-num">066 888 66 88</div>
                                <div className="support-contacts__item-descr">для дзвінків по Україн</div>
                            </div>
                            <div className="support-contacts__item">
                                <div className="support-contacts__item-num">099 777 99 77</div>
                                <div className="support-contacts__item-descr">для бізнес-клієнтів</div>
                            </div>
                        </div>
                        <div className="copyright">The site was developed by Igor Motriy and Dmytro Kalitventsev</div>
                    </div>
                    <div className="additional-info">
                        <div className='settings-site'>
                            <div className="set-language" title='Українська'>
                                <div className="set-language__flag">
                                    <img src="img/icons/ukrainian-flag.svg" alt="flag" />
                                </div>
                                <div className="set-language__title">UA</div>
                                <div className="set-language__more">
                                    <img src="img/icons/triangle.svg" alt="more" />
                                </div>
                            </div>
                            <div className="switch-theme">
                                <div className="switch-theme__icon" title='Темна'>
                                    <img src="img/icons/switch-theme/dark.svg" alt="dark" />
                                </div>
                            </div>
                        </div>
                        <div className="installing-application">
                            <div className="installing-application__item" title='Apple store'>
                                <div className="installing-application__img">
                                    <img src="img/icons/store/apple.svg" alt="apple" />
                                </div>
                                <div className="installing-application__title">
                                    <span>Apple store</span>
                                </div>
                            </div>
                            <div className="installing-application__item" title='Google Play'>
                                <div className="installing-application__img">
                                    <img src="img/icons/store/google-play.svg" alt="google" />
                                </div>
                                <div className="installing-application__title">
                                    <span>Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};