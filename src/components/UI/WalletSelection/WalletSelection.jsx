import './walletSelection.scss';

export const WalletSelection = ({ titleText }) => {
    return (
        <div className="wallet-selection">
            <div className="wallet-selection__title">{titleText}</div>
            <div className="wallet-selection__main">
                <div className="wallet-selection__current">Інша картка</div>
                <div className="wallet-selection__icon">
                    <img src="./img/icons/wallet.svg" alt="wallet" />
                </div>
            </div>
        </div>
    );
};