import React from "react";

interface writeupInterface {
    date: string,
    head: string,
    onClick? : () => void
}


export const WriteupComponent:React.FC<writeupInterface> = ({date,head, onClick}) => {
    return (
        <div onClick={onClick} className="font-mono  max-w-screen  bg-[#EFDFD8] hover:underline hover:cursor-pointer">
            <div className="flex">
                <div className="pl-64 pr-64">
                    {date}
                </div>
                <div>
                    {head}
                </div>
            </div>
        </div>
    )
}