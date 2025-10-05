import React from "react";
import { NavbarButton } from "./NavbarButton";

export const Navbar: React.FC = () => {
    return (
        <>
        <div className="flex flex-row gap-4">
            <NavbarButton value= "Home"/>
            <NavbarButton value= "Projects" />
            <NavbarButton value= "Javascript" />
            <NavbarButton value= "Writeups" />            
        </div>
       <hr className="w-full m-4 border-gray-300" />
        </>
    )
}