import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { privateRoutes } from "../../routes";
import { logoutUser } from "../../services/auth";
import { getLocalStorageData } from "../../utils";
import Toast from "../Toast";

const Navbar = ({auth}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const title = privateRoutes.find(route => route.path === location.pathname)?.name;
    const [userAvatar, setUserAvatar] = useState('');
    // logout method
    const onLogout = () => {
        const message = logoutUser(auth.setAuthenticated);
        if(message.status === 200){
            navigate('/auth/login');
            Toast(message.message, {type: 'success'});
        }
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(
        () => {
            const user = getLocalStorageData('user');
            user && setUserAvatar(user.avatar);
        }, []
    )

    return (
        <div className="text-center" style={{ display: "flex", justifyContent: "space-between", padding: "0 25px", alignItems: "center" }}>
            <div className="nav-title p-3">
            <h3><b>{title}</b></h3>
            </div>

            <div style={{ display: "flex", fontSize: "1.1em", cursor: "pointer" }} className="text-dark">
               <div className="img-con p-2">
                <img src={`${userAvatar ? userAvatar : 'https://via.placeholder.com/150'}`} alt="placeholder" className="rounded-circle"  width={35} height={35}/>
               </div>

               <div className="not p-2 mt-1">
                   <i className="fa fa-bell"></i>
               </div>

                <div className="user p-2 mt-1">
                    <i className="fa fa-user"></i>
                </div>

                <div className="log-out p-2 mt-1">
                    <span onClick={() => {onLogout()}}>
                        <i className="fa fa-sign-out"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;