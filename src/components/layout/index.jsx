import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Sidebar from '../siderbar';
import Navbar from '../navbar';
import Footer from '../footer';

const Layout = ({children, auth}) => {
    return (
        <div className='row'>
            <div className='col-md-2 col-sx-12 my-side'>
                    {/* <div style={{ position: "fixed",  height: "100vh" }}> */}
                        <Sidebar auth={auth} />
                    {/* </div> */}
            </div>
            <div className='col-md-10 col-sx-12' style={{ marginLeft: "auto" }}>
                <Navbar auth={auth} />
                {children}
                <Footer />
            </div>
        </div>
    )
};

export default Layout;