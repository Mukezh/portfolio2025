import React from "react";
import { ProjectComponent } from "./ProjectComponent";

export const Project:React.FC = () => {
    return(
        <>
            <div className="font-mono min-h-screen bg-[#EFDFD8] ">
                <h1 className="p-4 text-2xl">Projects</h1>
                <ProjectComponent ProjectDesc={ "https://raw.githubusercontent.com/Mukezh/awwards_sundown_clone/refs/heads/main/README.md"} 
                ProjectName = {"awwards_sundown_clone"} RepoURL ={"https://github.com/Mukezh/awwards_sundown_clone"} />
                <ProjectComponent ProjectDesc={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate."} 
                ProjectName = {"Project 1"} RepoURL ={"github.com"} />
<ProjectComponent ProjectDesc={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate."} 
                ProjectName = {"Project 1"} RepoURL ={"github.com"} />
<ProjectComponent ProjectDesc={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos consectetur harum, aliquid optio qui voluptas veritatis placeat aut mollitia voluptates officiis distinctio tempore excepturi, eligendi quibusdam est? Error, cupiditate."} 
                ProjectName = {"Project 1"} RepoURL ={"github.com"} />
                                <ProjectComponent ProjectDesc={ "https://raw.githubusercontent.com/Mukezh/awwards_sundown_clone/refs/heads/main/README.md"} 
                ProjectName = {"Project 1"} RepoURL ={"https://github.com/Mukezh/awwards_sundown_clone"} />
            </div>
        </>
    )
}