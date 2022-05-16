import React from "react";
import { useLocation } from "react-router-dom";
import { privateRoutes } from "../../routes";

const Navbar = () => {
    const location = useLocation();
    const title = privateRoutes.find(route => route.path === location.pathname)?.name;
    return (
        <div className="text-center" style={{ display: "flex", justifyContent: "space-between", padding: "0 25px", alignItems: "center" }}>
            <div className="nav-title p-3">
            <h5>{title}</h5>
            </div>

            <div style={{ display: "flex", fontSize: "1.6em" }} className="text-primary">
               <div className="img-con p-2">
                <img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-circle"  width={35} height={35}/>
               </div>

               <div className="not p-2">
                   <i className="fa fa-bell"></i>
               </div>

                <div className="user p-2">
                    <i className="fa fa-user"></i>
                </div>

                <div className="log-out p-2">
                    <i className="fa fa-sign-out"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;