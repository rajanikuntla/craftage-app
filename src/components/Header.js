import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to={"/"} className="d-flex nav-link align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        Craftage
                        </Link>
                    </div>
                    <div className="col-9">
                    <ul className="d-flex nav justify-content-lg-end text-small ">
                            <li>
                            <Link to={'/cart'} className="d-flex nav-link align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            Cart
                        </Link>
                           
                            </li>
                            <li>
                            <Link to={"/whishlist"} className="d-flex nav-link align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            Whishlist
                        </Link>
                           
                            </li>
                            <li>
                            <Link to={"/login"} className="d-flex nav-link align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            Account
                        </Link>
                           
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                </div>
            </div>
            
        </header>
    );
}

export default Header;