import React from 'react';
import './style.css';
import { toast } from 'react-toastify';
import { logoutUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast';

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
                <div className='container-fluid'>
                    <h6>{title || 'CRM Dashboard'}</h6>
                </div>
            </div>
            <div className='sidebar-content'>

            </div>
            <div className='sidebar-footer'>
                <div className='container-fluid'>
                    <h6 onClick={() => onLogout()}>Logout</h6>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;