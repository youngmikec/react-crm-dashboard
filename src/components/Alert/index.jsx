import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Alert = ({message}) => {
    useEffect(
        () => {
            toast(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    )
    return (
        <ToastContainer/>
    )
}

export default Alert;