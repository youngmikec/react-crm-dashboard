import React from 'react';
import './style.css';

const Sidebar = ({title, routes}) => {
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
                    <h6>Logout</h6>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;