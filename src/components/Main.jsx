import '../styles/main/main.scss';
import ServiceMenu from './ServiceMenu';

const Main = () => {
    return (
        <main className='main'>

            <ServiceMenu />

            <div className="fast-payments">
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/card.svg' alt='multicolor-card' />
                        </div>
                        <h2 className="fast-payment__title">Переказ на картку</h2>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field'>
                            <input
                                className="fast-payment__input"
                                type='text'
                                name='data-payment'
                                placeholder='0000 0000 0000 0000'
                            />
                            <div className="fast-payment__icon-field">
                                <img src='img/icons/gray-card.svg' alt='gray-card' />
                            </div>
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="fast-payment__footer">
                        <div className="fast-payment__description">
                            VISA/MasterCard українських та закордонних банків
                        </div>
                    </div>
                </div>
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/phone.svg' alt='multicolor-card' />
                        </div>
                        <h2 className="fast-payment__title">Поповнення мобільного</h2>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field'>
                            <div className='fast-payment__operator'>
                                <div className="fast-payment__icon-country">
                                    <img src='img/icons/ukrainian-flag.svg' alt='gray-card' />
                                </div>
                                <span className="fast-payment__operator-number">+380</span>
                                <div className="fast-payment__more-operators">
                                    <img src="img/icons/triangle.svg" alt="triangle" />
                                </div>
                            </div>
                            <input
                                className="fast-payment__input"
                                type='text'
                                name='data-payment'
                                placeholder='000000000'
                            />
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fast-payment">
                    <div className="fast-payment__header">
                        <div className="fast-payment__icon-title">
                            <img src='img/icons/icons-with-bg/communication.svg' alt='multicolor-card' />
                        </div>
                        <h2 className="fast-payment__title">Платіж</h2>
                    </div>
                    <div className="fast-payment__main">
                        <label className='fast-payment__field fast-payment__field_search'>
                            <div className="fast-payment__icon-field">
                                <img src='img/icons/search.svg' alt='gray-card' />
                            </div>
                            <input
                                className="fast-payment__input"
                                type='text'
                                name='data-payment'
                                placeholder='UAXXXXXXXXXXXXXXXX'
                            />
                        </label>
                        <div className="fast-payment__button-pay">
                            <div className="fast-payment__icon-arrow">
                                <img src="img/icons/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="fast-payment__footer">
                        <div className="fast-payment__description">
                            IBAN, ЄДРПОУ, номер р/рахунку або назва одержувача
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;