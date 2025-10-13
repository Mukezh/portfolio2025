import React from "react";
import { NavbarButton } from "./NavbarButton";

export const Navbar: React.FC<{onSelect: (value:string) => void}> = ({onSelect}) => {
    return (
        <>
        <div className="flex flex-row gap-4 ">
            <NavbarButton onClick={()=>onSelect('home')} value= "Home"/>
            <NavbarButton onClick={()=>onSelect('project')} value= "Projects" />
            {/* <NavbarButton onClick={()=>onSelect('Javascript')} value= "Javascript" /> */}
            <NavbarButton onClick={()=>onSelect('Writeups')} value= "Writeups" />            
        </div>
       <hr className="w-full m-4 border-gray-300" />
        </>
    )
}