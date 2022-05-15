import { setLocalStorageData } from "../../utils";
import { useHistory } from 'react';

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

export const loginUser = (email, password) => {
    const returnedUser = users_from_db.find(user => (user.email === email && user.password === password));
    if(returnedUser){
        setLocalStorageData('user', returnedUser);
        window.history.pushState(null, '', '/home');
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

