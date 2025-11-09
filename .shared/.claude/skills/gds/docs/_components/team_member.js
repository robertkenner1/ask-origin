import React from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";

const TeamMember = ({ name, title }) => {
  const first = name.split(" ")[0];
  return (
    <div className="member">
      <div className="member-image">
        <img src={useBaseUrl(`/img/support/${first.toLowerCase()}.jpeg`)} alt={first} />
      </div>
      <div className="member-info">
        <span className="level-4">{name}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TeamMember;
