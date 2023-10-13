import './footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="support-info">
                        <div className="support-links">
                            <a className="support-links__item" href='#'>Відділення</a>
                            <a className="support-links__item" href='#'>Регламент і тарифи</a>
                            <a className="support-links__item" href='#'>Про персональні дані</a>
                            <a className="support-links__item" href='#'>Безпека</a>
                            <a className="support-links__item" href='#'>API</a>
                        </div>
                        <div className="support-contacts">
                            <div className="support-contacts__item">
                                <div className="support-contacts__item-num">3700</div>
                                <div className="support-contacts__item-descr">безкоштовно з мобільних</div>
                            </div>
                            <div className="support-contacts__item">
                                <div className="support-contacts__item-num">+38-073-716-11-31</div>
                                <div className="support-contacts__item-descr">для дзвінків з-за кордону</div>
                            </div>
                        </div>
                        <div className="copyright">© 2023 ПриватБанк Ліцензія № 22 від 19.03.1992</div>
                    </div>
                    <div className="additional-info">
                        <div className='settings-site'>
                            <div className="set-language" title='Українська'>
                                <div className="set-language__flag">
                                    <img src="img/icons/ukrainian-flag.svg" alt="flag" />
                                </div>
                                <div className="set-language__title">Українська</div>
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
                                    Доступно в
                                    <span> Apple store</span>
                                </div>
                            </div>
                            <div className="installing-application__item" title='Google Play'>
                                <div className="installing-application__img">
                                    <img src="img/icons/store/google-play.svg" alt="google" />
                                </div>
                                <div className="installing-application__title">
                                    Доступно в
                                    <span> Google Play</span>
                                </div>
                            </div>
                            <div className="installing-application__item" title='AppGallery'>
                                <div className="installing-application__img">
                                    <img src="img/icons/store/huawei.svg" alt="huawei" />
                                </div>
                                <div className="installing-application__title">
                                    Доступно в
                                    <span> AppGallery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};