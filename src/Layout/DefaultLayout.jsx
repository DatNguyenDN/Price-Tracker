import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header";
const DefaultLayout = ({ children }) => {
    return (
        <div className="">
            <Navbar />

            <div className={children.type.name !== 'Home' ? 'pt-[90px]' : ''}>
                {children}
            </div>
           
        </div>
    );
};

export default DefaultLayout;
