import '../../common.scss';
import { Footer, Header, Main } from '../../layout';
import RenderElement from '../../utils/hocs/RenderElement';
import useDropDownMenu from '../../utils/hooks/useDropDownMenu';
import ToolsDropDownMenu from '../../utils/context/ToolsDropDownMenu';
import { Overlay } from '../../components';

export const BasicStructure = () => {
    const [refButtonMenu, isActiveMenu, setIsActiveMenu] = useDropDownMenu();
    const toolsDropDownMenu = {
        refButtonMenu,
        isActiveMenu,
        setIsActiveMenu,
    }

    return (
        <ToolsDropDownMenu.Provider value={toolsDropDownMenu}>
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
                <RenderElement data={isActiveMenu}>
                    <Overlay />
                </RenderElement>
            </div>
        </ToolsDropDownMenu.Provider>
    );
};