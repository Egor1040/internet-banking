import '../../layout/Header/header.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToolsDropDownMenu from '../../utils/context/ToolsDropDownMenu';
import { CurrencyExchange, ServicesMenu } from '../../components';
import RenderElement from '../../utils/hocs/RenderElement';


export const Header = () => {
    const { refButtonMenu, isActiveMenu } = useContext(ToolsDropDownMenu);

    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-left">
                    <Link to="/" className="header-logo">
                        <span className='header-logo__icon'></span>
                    </Link>
                    <div className="header-service" ref={refButtonMenu}>
                        Сервіси
                        <div className="header-service__img">
                            <img src="img/icons/arrow.svg" alt="service-arrow" />
                        </div>

                        <RenderElement data={isActiveMenu}>
                            <ServicesMenu isActive={isActiveMenu} />
                        </RenderElement>

                    </div>
                    <Link to="payment-history" className="header-history">
                        Історія платежів
                    </Link>
                </div>
                <div className="header-right">
                    <CurrencyExchange />
                    <div className='header-login'>
                        <div className="login-wrap">
                            <button className="login">
                                <div className="login-img">
                                    <img src='img/icons/user.svg' alt='user' className="login-img__icon" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};