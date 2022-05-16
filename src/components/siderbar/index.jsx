import React from 'react';
import './style.css';
import { toast } from 'react-toastify';
import { logoutUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast';
import SidebarLink from './sidebar-link';

const Sidebar = ({title, routes, auth}) => {
    const navigate = useNavigate();

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
        
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='container-fluid p-4'>
                    <h6>{title || 'CRM Dashboard'}</h6>
                </div>
            </div>
            <div className='sidebar-content'>
                <SidebarLink title={'Dashboard'} iconClass="fa fa-th-large" />
                <SidebarLink title={'Clients'} iconClass="fa fa-users"/>
                <SidebarLink title={'Products'} iconClass="fa fa-archive" />
                <SidebarLink title={'Team'} iconClass="fa fa-users"/>
            </div>

            <div className='sidebar-footer'>
                <div className={'d-flex my-2 px-3 py-3 my-nav-link'} onClick={() => onLogout()}>
                    <span className='flex mx-1'>
                        <i className="fa fa-logout" aria-hidden="true"></i>
                    </span>
                    <span className="flex">Logout</span>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;