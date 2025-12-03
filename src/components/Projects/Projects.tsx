import React from "react";
import { ProjectComponent } from "./ProjectComponent";

export const Project: React.FC = () => {
  return (
    <>
      <div className="font-mono min-h-screen bg-[#EFDFD8] ">
        <h1 className="p-4 text-2xl">Projects</h1>
        <ProjectComponent
          ProjectDesc={"Just a UI landing page to show off my UI skills."}
          ProjectName={"awwards_sundown_clone"}
          RepoURL={"https://github.com/Mukezh/awwards_sundown_clone"}
        />
        <ProjectComponent
          ProjectDesc={
            "A project that implements how youtube or any streaming platform streams video at multiple resolutions"
          }
          ProjectName={"Adaptive Bitrate viewer"}
          RepoURL={"https://github.com/Mukezh/adaptivebitrateviewer"}
        />
        <ProjectComponent
          ProjectDesc={
            "Just a small project implenting how redis is faster than the average SQL database"
          }
          ProjectName={"Redis Implementation"}
          RepoURL={"https://github.com/Mukezh/Redis-Implementation"}
        />
        <ProjectComponent
          ProjectDesc={
            "Created a small extension that tracks how long I spend on each tab."
          }
          ProjectName={"Tab time tracker - extension"}
          RepoURL={"https://github.com/Mukezh/tabtimetracker"}
        />
      </div>
    </>
  );
};
