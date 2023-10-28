import { useState, useRef, useEffect } from "react";

const useDropDownMenu = () => {
    const refButton = useRef();
    const [isActive, setIsActive] = useState(false);

    const show = () => setIsActive(true);
    const hide = () => setIsActive(false);

    useEffect(() => {
        const button = refButton.current;
        
        button.addEventListener('mouseenter', show);
        button.addEventListener('mouseleave', hide);

        return () => {
            button.removerEventListener('mouseenter', show);
            button.removerEventListener('mouseleave', hide);
        }
    }, []);

    return [refButton, isActive, setIsActive];
}

export default useDropDownMenu;