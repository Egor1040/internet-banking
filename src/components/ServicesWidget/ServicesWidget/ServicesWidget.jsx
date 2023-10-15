import { ServiceWidget } from '../ServiceWidget/ServiceWidget';
import { ServicesMenu } from '../../ServicesMenu/ServicesMenu/ServicesMenu';
import { BankNews } from '../BankNews/BankNews';
import { FastTransferCard } from '../../UI/Forms/FastTransferCard/FastTransferCard';
import { FastMobileTopUp } from '../../UI/Forms/FastMobileTopUp/FastMobileTopUp';
import { FastRequisitesPay } from '../../UI/Forms/FastRequisitesPay/FastRequisitesPay';
import './servicesWidget.scss';

export const ServicesWidget = () => {
    return (
        <>
            <ServicesMenu />

            <div className="services-widget">

                <ServiceWidget
                    title={'Переказ на картку'}
                    titleIcon={'icons-with-bg/card.svg'}
                    descr={'VISA/MasterCard українських та закордонних банків'}
                >
                    <FastTransferCard />

                </ServiceWidget>

                <ServiceWidget
                    title={'Поповнення мобільного'}
                    titleIcon={'icons-with-bg/phone.svg'}
                >
                    <FastMobileTopUp />

                </ServiceWidget>

                <ServiceWidget
                    title={'Платіж'}
                    titleIcon={'icons-with-bg/hryvnia.svg'}
                    descr={'IBAN, ЄДРПОУ, номер р/рахунку або назва одержувача'}
                >
                    <FastRequisitesPay />

                </ServiceWidget>

                <ServiceWidget
                    title={'Що нового у Приват24'}
                    titleIcon={'bullhorn.svg'}
                    arrowIcon={'arrow.svg'}
                >
                    <BankNews />

                </ServiceWidget>

            </div>
        </>
    );
};