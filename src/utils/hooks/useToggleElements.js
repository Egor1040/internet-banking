import { useState } from "react";

const useToggleElements = () => {
    const [isElemVisible, setElemVisible] = useState([
        { id: 1, opened: false },
        { id: 2, opened: false },
    ]);

    const toggleElemVisibility = (id) => {
        setElemVisible(
            isElemVisible.map(elemVisible => elemVisible.id === id ? { ...elemVisible, opened: !elemVisible.opened } : { ...elemVisible, opened: false })
        )
    }

    const [firstElementVisible, secondElementVisible] = isElemVisible;
    return { toggleElemVisibility, firstElementVisible, secondElementVisible };
}

export default useToggleElements;