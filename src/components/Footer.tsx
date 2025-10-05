import React from "react";
import { NavbarButton } from "./NavbarButton";

export const Footer: React.FC = () => {
    return (
        <div className="m-4 text-lg flex flex-col gap-2">
            <hr className="w-full m-4 border-gray-300" />
           <div className="flex gap-4">
             {/* <span>X</span>
            <span>Github</span>
            <span>LinkedIn</span> */}
            <NavbarButton value="X" />
            <NavbarButton value="Github" />
            <NavbarButton value="LinkedIn" />
           </div>
        </div>
    )
}