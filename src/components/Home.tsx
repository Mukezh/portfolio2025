import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <p>
        Hey It's <span className="font-semibold">Mukesh</span>,
      </p>
      <br />
      <p>An Engineer who like to build and understand stuffs in depth</p>
      <br />
      <p>I hike, read, code or suffer in silence.</p>
      <br />I live by the motto:
      <span className="italic ">
        {" "}
        "As long as I live, anything is possible."{" "}
      </span>
    </div>
  );
};
