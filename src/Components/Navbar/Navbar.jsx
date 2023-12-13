import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
// import { useDarkMode } from "../../DarkModeContent";
import "./styles.css";
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

const Navbar = () => {
    // const { darkMode, toggleDarkMode } = useDarkMode();

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav
                id="navbar__container"
                className=" fixed z-20 bg-opacity-90 left-0 top-0   w-full h-[90px] flex flex-wrap items-center  justify-between p-3 text-[--color]font-poppin font-semibold uppercase text-primary backdrop-blur-[100px]  "
            >
                <div className="hidden max-sm:flex max-md:flex">
                    <label className="hamburger">
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32 " onClick={toggleMenu}>
                            <path
                                className="line line-top-bottom "
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            ></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>

                <div className="max-sm:hidden ">
                    <NavLink to="/">
                        <img className=" w-[120px] h-[70px] " src={logo} alt="logo" />
                    </NavLink>
                </div>

        
                    <div className="flex justify-around max-lg:hidden gap-10  text-xl">
                        <NavLinks />
                    </div>
    
                    <div>
                        <button className="btn btn-primary btn-md max-sm:btn-sm   ">
                            <NavLink to="/login">
                                <p className="text-black">Login</p>
                            </NavLink>
                        </button>
                    </div>
             

                {/**Dark Mode */}
                {/* <div className="flex right-0 max-sm:flex"
               onClick={toggleDarkMode}>
                <ToggleModeBtn/>
               </div> */}
            </nav>

            {isOpen && (
                <div className="flex  top-0 text-colors flex-col items-center gap-10 md:hidden pt-[90px] max-md:pt-[120px] font-poppin font-bold uppercase text-primary backdrop-blur-[100px] pb-10">
                    <NavLinks />
                </div>
            )}
        </>
    );
};
export default Navbar;
