import React from "react";
import { NavbarButton } from "./NavbarButton";
import { Tooltip } from "./ui/tooltip-card";

export const Footer: React.FC = () => {
  const xUrl: string = "https://x.com/tattakkaaee";
  const githubUrl: string = "https://github.com/Mukezh";
  const linkedInUrl: string = "https://linkedin.com/in/mukeshbabu";
  return (
    <div className=" flex flex-col gap-2">
      <hr className="w-full m-4 border-gray-300" />
      <div className="flex gap-4 ">
        <Tooltip
          content={<img src="/Xsnip.jpg" />}
          containerClassName="X-container"
        >
          <NavbarButton value="X" url={xUrl} />
        </Tooltip>
        <Tooltip
          content={<img src="/LinkedInSnip.jpg" />}
          containerClassName="LinkedIn-container"
        >
          <NavbarButton value="LinkedIn" url={linkedInUrl} />
        </Tooltip>
        <Tooltip
          content={<img src="/GithubSnip.jpg" />}
          containerClassName="Github-container"
        >
          <NavbarButton value="Github" url={githubUrl} />
        </Tooltip>
      </div>
    </div>
  );
};
