import './myWallet.scss';

export const MyWallet = ( {titleText} ) => {
    return (
        <div className="title-wallet">
            <div className="title-wallet__title">{titleText}</div>
            <div className="title-wallet__main">
                <div className="title-wallet__current">Інша картка</div>
                <div className="title-wallet__icon">
                    <img src="./img/icons/wallet.svg" alt="wallet" />
                </div>
            </div>
        </div>
    );
};