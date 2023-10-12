import './bankNews.scss';

export const BankNews = () => {
    return (
        <div className="bank-news">
            <div className="bank-news__item">
                <div className="bank-news__icon">
                    <img src="img/icons/icons-with-bg/wallet.svg" alt="walet" />
                </div>
                <div className="bank-news__text">
                    Міжнародна доставка карток 🌐
                </div>
            </div>
            <div className="bank-news__item">
                <div className="bank-news__icon">
                    <img src="img/icons/icons-with-bg/wallet.svg" alt="walet" />
                </div>
                <div className="bank-news__text">
                    Доставка карток 💳
                </div>
            </div>
        </div>
    );
};