import React from "react";

const Footer = () => {
    return (
        <div className="mt-5 container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <h5>Sleek CRM Dashboard</h5>
                </div>
                <div className="col-sm-12 col-md-4">
                    <p>
                        <b>&copy; 2022 Sleek team</b>
                    </p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div>
                        <span className="mx-2">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        </span>
                        <span className="mx-2">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span>
                        <span className="mx-2">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;