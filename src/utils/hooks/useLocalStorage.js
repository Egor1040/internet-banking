import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const getLocalData = () => {
        const current = localStorage.getItem(key);

        return current ? JSON.parse(current) : initialValue;
    }

    const [localData, setLocalData] = useState(getLocalData());

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localData));
    }, [localData]);

    return [localData, setLocalData];
}

export default useLocalStorage;