import React from 'react';
import './style.css';
import SidebarLink from './sidebar-link';

const Sidebar = ({title, routes}) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='container-fluid'>
                    <h6>{title || 'CRM Dashboard'}</h6>
                </div>
            </div>
            <div className='sidebar-content'>
                <SidebarLink active={false} title={'Dashboard'} iconClass="fa fa-th-large" />
                <SidebarLink active={true} title={'Clients'} iconClass="fa fa-users"/>
                <SidebarLink active={false} title={'Products'} iconClass="fa fa-archive" />
                <SidebarLink active={false} title={'Team'} iconClass="fa fa-users"/>
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