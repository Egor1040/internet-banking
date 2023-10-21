import { AmountField, CardForm, FastRechargeMobile } from '../../components';
import './rechargeMobile.scss';


export const RechargeMobile = () => {
    return (
        <div className='recharge-mobile'>
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
            <div className="recharge-main">
                <form className="recharge-form">
                    <div className='recharge-form__mobile'>
                        <div className="recharge-form__title-mobile">Номер</div>

                        <FastRechargeMobile isButton={false} />

                    </div>

                    <AmountField />

                    <div className='total-amount'>
                        <div className="total-amount__item">
                            <div className="total-amount__title">Комісія</div>
                            <div className="total-amount__sum">0 UAH</div>
                        </div>
                        <div className="total-amount__item">
                            <div className="total-amount__title">До сплати</div>
                            <div className="total-amount__sum"> UAH</div>
                        </div>
                    </div>

                    <CardForm />

                    <div className="recharge-form__terms-use">
                        Натискаючи кнопку "Поповнити" Ви приймаєте умови
                        <span> користування сервісом</span>
                    </div>

                    <button className='recharge-form__confirmation' type='submit'>Додати в кошик</button>
                </form>
                <div className="recharge-main__img-decor">
                    <img src="./img/city.svg" alt="city" />
                </div>
            </div>
        </div>
    );
};