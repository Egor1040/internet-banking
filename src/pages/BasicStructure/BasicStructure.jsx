import '../../common.scss';
import { Footer, Header, Main } from '../../layout';

export const BasicStructure = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};