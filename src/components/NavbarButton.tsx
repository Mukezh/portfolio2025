import React  from "react";

interface NavbarComponentProps {
    value: string;
    url?: string;
    onClick?: () => void
}

export const NavbarButton:React.FC<NavbarComponentProps> = ({value, url, onClick}) => {
    
    return (
        <a  href={url} onClick={onClick} target="_blank" rel="noopener noreferrer"  className="hover:cursor-pointer md:text-md hover:text-xl">
            {value}
        </a>
    )
}