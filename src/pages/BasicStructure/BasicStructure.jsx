import '../../common.scss';
import { Overlay } from '../../components';
import { Footer, Header, Main } from '../../layout';
import RenderElement from '../../utils/hocs/RenderElement';
import useOverlay from '../../utils/hooks/useOverlay';

export const BasicStructure = () => {
    const [refOverlay, isActive] = useOverlay();

    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
            <RenderElement data={isActive}>
                <Overlay refOverlay={refOverlay} />
            </RenderElement>
        </div>
    );
};