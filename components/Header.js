// import { Dropdown } from "bootstrap";
import { useState } from "react";
import React from "react";
import Dropdown from './Dropdown'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section class="common-header">
            <div class="container p-0">
                <nav class="navbar navbar-expand-lg navbar-dark nav-bg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="/logo-01.png" class="img-fluid logo width-40" alt="logo"/>
                        </a>
                        <button class="navbar-toggler" onClick={toggleNavbar} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className={isOpen ? "" : "collapse navbar-collapse"} id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About Us</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <Dropdown/>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="/blogs">Blog</a>
                                </li> */}
                            </ul>
                            <div class="">
                                <a class="contactus-btn btn" href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </section>
    );
};
export default Header;