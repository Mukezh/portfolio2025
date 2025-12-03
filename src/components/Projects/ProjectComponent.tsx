import React from "react";
import { NavbarButton } from "../NavbarButton";

interface ProjectComponentprops {
  ProjectName: string;
  ProjectDesc: string;
  RepoURL: string;
}

export const ProjectComponent: React.FC<ProjectComponentprops> = ({
  ProjectName,
  ProjectDesc,
  RepoURL,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-4 p-4 ">
        <h3 className="">
          {ProjectName} -{" "}
          <strong>
            <NavbarButton url={RepoURL} value="Repo" />
          </strong>
        </h3>
        <div className="flex-wrap max-w-2/3 max-h-1/3">
          {ProjectDesc}
          <div>-----------------------------------------</div>
        </div>
      </div>
    </>
  );
};
