import { CurrentCartFooter } from "@/Data/Form&Table/Form";
import React from "react";

const CurrentCartTableFooter = () => {
  return (
    <tfoot>
      {CurrentCartFooter.map((data, i) => (
        <tr key={i}>
          <td>{data.footerTittle}</td>
          <td colSpan={2}>${data.price}</td>
        </tr>
      ))}
    </tfoot>
  );
};

export default CurrentCartTableFooter;
