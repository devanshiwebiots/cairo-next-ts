import { QuickAccessTitle } from "@/Constant";
import { QuickAccessData } from "@/Data/FileManager";
import React, { Fragment } from "react";

const QuickAccess = () => {
  return (
    <Fragment>
      <h4 className="mb-2">{QuickAccessTitle}</h4>
      <ul className="quick-file d-flex flex-row">
        {QuickAccessData.map((item, i) => (
          <li key={i}>
            <div className="quick-box">{item.icon}</div>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default QuickAccess;
