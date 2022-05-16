import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Sidebar from '../siderbar';
import Navbar from '../navbar';
import Footer from '../footer';

const Layout = ({children}) => {
    return (
        <div className='row'>
            <div className='col-md-2 col-sm-3 col-sx-12'>
                <Sidebar />
            </div>
            <div className='col-md-10 col-sm-9 col-sx-12'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
};

export default Layout;