import React  from "react";

interface NavbarComponentProps {
    value: String;
}

export const NavbarButton:React.FC<NavbarComponentProps> = ({value}) => {
    return (
        <button className="hover:cursor-pointer hover:text-xl">
            {value}
        </button>
    )
}