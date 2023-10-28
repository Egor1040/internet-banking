import { useState, useRef, useEffect } from "react";

const useOverlay = () => {
    const refOverlay = useRef();
    const [isActive, setIsActive] = useState(false);

    const show = () => setIsActive(true);
    const hide = () => setIsActive(false);

    useEffect(() => {
        const target = refOverlay.current;

        target?.addEventListener('mouseenter', show);
        target?.addEventListener('mousemove', show);
        target?.addEventListener('mouseleave', hide);

        return () => {
            target?.removerEventListener('mouseenter', show);
            target?.removerEventListener('mousemove', show);
            target?.removerEventListener('mouseleave', hide);
        }
    }, []);

    return [refOverlay, isActive];
}

export default useOverlay;