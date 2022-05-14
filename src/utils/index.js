export const setLocalStorageData = (name, data) => {
    localStorage.setItem(`${name}`, JSON.stringify(data));
}

export const getLocalStorageData = (name) => {
    const returnedData = localStorage.getItem(`${name}`);
    return JSON.parse(returnedData);
}

export const isAuthenticated = () => {
    return getLocalStorageData('user') ? true : false;
}