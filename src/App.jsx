import './common.scss';
import Footer from './layout/Footer/Footer';
import Header from './components/Header';
import Main from './layout/Main/Main';

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
