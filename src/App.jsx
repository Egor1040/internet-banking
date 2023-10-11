import './common.scss';
import Footer from './components/Footer';

import Main from './components/Main';
import { Header } from './layout';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
