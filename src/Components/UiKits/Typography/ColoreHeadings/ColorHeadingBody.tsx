import { Code, Heading } from "@/Constant";
import React from "react";

const ColorHeadingBody = () => {
  return (
    <thead>
      <tr>
        <th className="pt-0">{Code}</th>
        <th className="pt-0">{Heading}</th>
      </tr>
    </thead>
  );
};

export default ColorHeadingBody;
