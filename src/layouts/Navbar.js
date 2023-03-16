import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className="header_wrapper">
            <nav className="navbar navbar-expand-lg fixed-top bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/images/logo.png" className="img-fluid" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-stream navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav menu-navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link" aria-current="page" href="#home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={''} exact href="">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/events" exact className="nav-link" href="">Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gallery" className="nav-link" href="">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""> <i className="text-danger fas fa-heart"></i>  Wishlist</a>
                            </li>
                            <li className="nav-item mt-3 mt-lg-0">
                                <NavLink className="main-btn" to="/register" exact href="">Sign Up</NavLink>
                            </li>
                            <li className="nav-item mt-3 mt-lg-0">
                                <NavLink className="main-btn" to="/profile"> <i className="fas fa-user"></i>  Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar