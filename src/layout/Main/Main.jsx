import { ServiceMenu } from '../../components';
import './main.scss';

const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='main-content'>

                    <ServiceMenu />

                    <div className="fast-payments">
                        <div className="fast-payment fast-payment_transfer-card">
                            <div className="fast-payment__header">
                                <div className="fast-payment__icon-title">
                                    <img src='img/icons/icons-with-bg/card.svg' alt='multicolor-card' />
                                </div>
                                <h2 className="fast-payment__title">Переказ на картку</h2>
                            </div>
                            <form className="fast-payment__main">
                                <label className='fast-payment__field'>
                                    <input
                                        className="fast-payment__input"
                                        type='text'
                                        name='transfer'
                                        placeholder='0000 0000 0000 0000'
                                    />
                                    <div className="fast-payment__icon-field">
                                        <img src='img/icons/gray-card.svg' alt='gray-card' />
                                    </div>
                                </label>
                                <button className="fast-payment__button-pay">
                                    <div className="fast-payment__icon-arrow">
                                        <img src="img/icons/arrow.svg" alt="arrow" />
                                    </div>
                                </button>
                            </form>
                            <div className="fast-payment__footer">
                                <div className="fast-payment__description">
                                    VISA/MasterCard українських та закордонних банків
                                </div>
                            </div>
                        </div>
                        <div className="fast-payment fast-payment_mobile-pay">
                            <div className="fast-payment__header">
                                <div className="fast-payment__icon-title">
                                    <img src='img/icons/icons-with-bg/phone.svg' alt='multicolor-card' />
                                </div>
                                <h2 className="fast-payment__title">Поповнення мобільного</h2>
                            </div>
                            <form className="fast-payment__main">
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
                                        name='mobile'
                                        placeholder='000000000'
                                    />
                                </label>
                                <button className="fast-payment__button-pay">
                                    <div className="fast-payment__icon-arrow">
                                        <img src="img/icons/arrow.svg" alt="arrow" />
                                    </div>
                                </button>
                            </form>
                        </div>
                        <div className="fast-payment fast-payment_requisites-pay">
                            <div className="fast-payment__header">
                                <div className="fast-payment__icon-title">
                                    <img src='img/icons/icons-with-bg/communication.svg' alt='multicolor-card' />
                                </div>
                                <h2 className="fast-payment__title">Платіж</h2>
                            </div>
                            <form className="fast-payment__main">
                                <label className='fast-payment__field'>
                                    <div className="fast-payment__icon-field">
                                        <img src='img/icons/search.svg' alt='gray-card' />
                                    </div>
                                    <input
                                        className="fast-payment__input"
                                        type='text'
                                        name='requisites'
                                        placeholder='UAXXXXXXXXXXXXXXXX'
                                    />
                                </label>
                                <button className="fast-payment__button-pay">
                                    <div className="fast-payment__icon-arrow">
                                        <img src="img/icons/arrow.svg" alt="arrow" />
                                    </div>
                                </button>
                            </form>
                            <div className="fast-payment__footer">
                                <div className="fast-payment__description">
                                    IBAN, ЄДРПОУ, номер р/рахунку або назва одержувача
                                </div>
                            </div>
                        </div>
                        <div className="fast-payment fast-payment_news-bank">
                            <div className="fast-payment__header">
                                <div className="fast-payment__icon-title">
                                    <img src='img/icons/bullhorn.svg' alt='bullhorn' />
                                </div>
                                <h2 className="fast-payment__title">Що нового у Приват24</h2>
                                <div className="fast-payment__icon-arrow">
                                    <img src="img/icons/arrow.svg" alt="arrow" />
                                </div>
                            </div>
                            <div className="fast-payment__main">
                                <div className="fast-payment__news">
                                    <div className="fast-payment__news-item">
                                        <div className="fast-payment__news-icon">
                                            <img src="img/icons/icons-with-bg/wallet.svg" alt="walet" />
                                        </div>
                                        <div className="fast-payment__news-text">
                                            Міжнародна доставка карток 🌐
                                        </div>
                                    </div>
                                    <div className="fast-payment__news-item">
                                        <div className="fast-payment__news-icon">
                                            <img src="img/icons/icons-with-bg/wallet.svg" alt="walet" />
                                        </div>
                                        <div className="fast-payment__news-text">
                                            Доставка карток 💳
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;