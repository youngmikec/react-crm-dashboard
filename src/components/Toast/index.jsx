import React from 'react'
import { toast } from 'react-toastify'

const Toast = (message, style) => {
    toast(message, style || {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
}

export default Toast