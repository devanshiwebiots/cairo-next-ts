import { Classprefix, Gridbehavior, Horizontalatalltimes, Maxcontainerwidth, StartHorizontalBreakpoint } from "@/Constant";
import { ClassprefixData, GridOptionSideData, MaxcontainerwidthData } from "@/Data/Uikits/Grid";
import React from "react";

const GridOptionsBody = () => {
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">
          {Gridbehavior}
        </th>
        <td>{Horizontalatalltimes}</td>
        <td colSpan={5}>{StartHorizontalBreakpoint}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {Maxcontainerwidth}
        </th>
        {MaxcontainerwidthData.map((data,index) => (
          <td key={index}>{data}</td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {Classprefix}
        </th>
        {ClassprefixData.map((data,index) => (
          <td key={index}>
            <code>{data}</code>
          </td>
        ))}
      </tr>
      {GridOptionSideData.map((data, i) => (
        <tr key={i}>
          <th className="text-nowrap" scope="row">
            {data.title}
          </th>
          <td colSpan={6}>{data.td}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default GridOptionsBody;
