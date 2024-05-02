const getItem = (key) => localStorage.getItem(key);

const setItem = (key, value) => localStorage.setItem(key, value);

const removeItem = (key) => localStorage.removeItem(key);

export const useLocalStorage = () => {
    return [getItem, setItem, removeItem];
}