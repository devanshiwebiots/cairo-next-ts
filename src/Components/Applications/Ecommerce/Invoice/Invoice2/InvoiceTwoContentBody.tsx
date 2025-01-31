import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { InvoiceTwoContentBodyData } from "@/Data/Invoice";
import React, { Fragment } from "react";

const InvoiceTwoContentBody = () => {
  return (
    <Fragment>
      {InvoiceTwoContentBodyData.map(({ img, title, name, qty, price, unit, vat, total }, index) => (
        <tr style={{ backgroundColor: "rgba(245, 246, 249, 1)", boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)" }} key={index}>
          <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "54px", height: "51px", backgroundColor: "#fff", display: "flex", justifyContent: "center", borderRadius: "5px" }}>
              <RatioImage src={`${ImagePath}/product-lists/product-categories/${img}`} style={{ height: 29 }} alt=""/>
            </span>
            <ul style={{padding:"0", margin:'0', listStyle:' none'}}>
              <li>
                <h4 style={{ fontWeight: "400", margin: "4px 0px", fontSize: "18px" }}>{name}</h4>
                <span style={{ color: "#52526C", opacity: "0.8", fontSize: "14px" }}>{title}</span>
              </li>
            </ul>
          </td>
          <td style={{padding: '18px 15px'}}><span style={{fontSize:'18px'}}>{qty}</span></td>
          <td style={{padding: '18px 15px', width:'12%'}}><span style={{fontSize:'18px'}}>{price}</span></td>
          <td style={{padding: '18px 15px' ,width:'12%'}}><span style={{fontSize:'18px'}}>{unit}</span></td>
          <td style={{padding: '18px 15px',width:'10%'}}><span style={{fontSize:'18px'}}>{vat}</span></td>
          <td style={{padding: '18px 15px'}}><span style={{fontSize:'18px'}}>{total}</span></td>
        </tr>
      ))}
    </Fragment>
  );
};

export default InvoiceTwoContentBody;
