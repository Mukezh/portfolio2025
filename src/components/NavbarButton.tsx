import React  from "react";

interface NavbarComponentProps {
    value: string;
    url?: string;
}

export const NavbarButton:React.FC<NavbarComponentProps> = ({value, url}) => {
    console.log('url:',url)
    return (
        <a  href={url} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer md:text-md hover:text-xl">
            {value}
        </a>
    )
}