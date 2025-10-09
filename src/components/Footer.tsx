import React from "react";
import { NavbarButton } from "./NavbarButton";

export const Footer: React.FC = () => {
    const xUrl:string = "https://x.com/tattakkaaee"
    const githubUrl:string = "https://github.com/Mukezh"
    const linkedInUrl:string = "https://linkedin.com/in/mukeshbabu"
    return (
        <div className=" flex flex-col gap-2">
            <hr className="w-full m-4 border-gray-300" />
           <div className="flex gap-4 ">
            <NavbarButton value="X" url={xUrl} />
            <NavbarButton value="Github" url={githubUrl}  />
            <NavbarButton value="LinkedIn" url={linkedInUrl} />
           </div>
        </div>
    )
}