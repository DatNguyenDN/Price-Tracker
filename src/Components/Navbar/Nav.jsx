import React, { useState,useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <NavLink to="/" className="hover:text-[--btn]">
                Home
            </NavLink>
            <NavLink to="/pricetracker" className="hover:text-[--btn]">
                Price Tracker
            </NavLink>
            <NavLink to="/mytracking" className="hover:text-[--btn]">
                My Tracking
            </NavLink>
            <NavLink to="/about" className="hover:text-[--btn]">
                About
            </NavLink>
            <NavLink to="/contact" className="hover:text-[--btn]">
                Contact
            </NavLink>
           
        </>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setIsOpen(false);
      }, [location.pathname]);
    return (
       <>
            <nav className=" flex justify-end items-center">
                <div className="hidden w-full md:flex justify-between">
                    <NavLinks />                 
                </div>
                
                <div className="hidden max-sm:flex max-md:flex">
                    <label className="hamburger">
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32 " onClick={toggleNavbar}>
                            <path
                                className="line line-top-bottom "
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            ></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col basis-full items-center gap-5 ">
                    <NavLinks/>
               
                </div>
            )}
       </>
    );
};

export default Nav;
