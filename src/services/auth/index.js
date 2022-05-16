import { getLocalStorageData, setLocalStorageData } from "../../utils";

const users_from_db = [
    {
        id: 1,
        name: "Ozor Michael Chisom",
        email: "michaelozor15@gmail.com",
        password: "godisgood"
    },
    {
        id: 2,
        name: "Monday",
        email: "monday@gmail.com",
        password: "monday"
    },
    {
        id: 1,
        name: "habib",
        email: "habib@gmail.com",
        password: "habib"
    },
];

export const loginUser = (email, password, callback) => {
    const returnedUser = users_from_db.find(user => (user.email === email && user.password === password));
    if(returnedUser){
        setLocalStorageData('user', returnedUser);
        callback(true);
        return {
            status: 200,
            message: "User logged in successfully",
        };
    }
    
    return {
        status: 403,
        message: "Incorrect Email or password",
    };
}


export const logoutUser = (callback) => {
    if(getLocalStorageData('user')){
        setLocalStorageData('user', null);
        callback(false);
        return {
            status: 200,
            message: "User logged out successfully",
        };
    }
    return {
        status: 403,
        message: "User not logged in",
    }
}
