import { useEffect, useState } from "react"

const getStorageValue = (key, defaultValue) => (
    JSON.parse(localStorage.getItem(key)) || defaultValue
)

export const usePersistentState = (key, defaultValue) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}