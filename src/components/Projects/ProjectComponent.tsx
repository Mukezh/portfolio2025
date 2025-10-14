import React, { useEffect, useState } from "react";
import { NavbarButton } from "../NavbarButton";

interface ProjectComponentprops {
    ProjectName: string,
    ProjectDesc: string,
    RepoURL: string
}

export const ProjectComponent:React.FC<ProjectComponentprops> = ({   ProjectName, ProjectDesc , RepoURL }) => {
    const [desc, setDesc] = useState('');

    useEffect(() => {
        fetch(ProjectDesc)
            .then(res => res.text())
            .then(res => setDesc(res))
    },[])
        
    return (
        <>
            <div className=" flex flex-col gap-4 p-4">
                <h3 className="">
                    {ProjectName } - <NavbarButton  url={RepoURL} value="Repo" />
                </h3>
                <div className="flex-wrap max-w-2/3 max-h-1/3">
                    {desc}
                </div>
            </div>
        </>
    )
}