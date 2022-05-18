import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { privateRoutes } from "../../routes";

const SidebarLink = ({title, iconClass}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const checkActive = () => {
        return location.pathname === privateRoutes.find(route => route.name === title)?.path
    }

    const changePage = () => {
        navigate(privateRoutes.find(route => route.name === title)?.path);
    }
    return (
        <>
            <div className={`d-flex my-2 px-3 py-3 my-nav-link ${checkActive() ? 'active' : ''}`} onClick={() => changePage()}>
                <span className='flex mx-1'>
                    <i className={iconClass} aria-hidden="true"></i>
                </span>
                <span className="flex">{title}</span>
            </div>
        </>
    )
}

export default SidebarLink;