import { ImagePath } from "@/Constant";
import Image from "next/image";

const InvoiceThirdHead = () => {
  return (
    <td>
    <table className="mt-2" style={{ width: "100%", backgroundImage: `url(${ImagePath}/email-template/invoice-3/bg.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: 10 }}>
      <tbody>
        <tr>
          <td style={{ padding: "30px 0 30px 30px" }}>
            <Image src={`${ImagePath}/logo/logo-1.png`} alt="logo" width={114} height={38}/>
            <address style={{ opacity: "0.8", width: "36%", marginTop: 10, fontStyle: "normal" }}>
              <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500, color:'#52526C', opacity:'0.8'}} >1982 Harvest Lane New York, NY12210 United State</span>
            </address>
          </td>
          <td style={{ textAlign: "end", padding: "30px 30px 30px 0"}}>
            <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 700 }}>Invoice</span>
            <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500}}>Receipt #1923195</span>
            <span style={{  display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500}}>May 02, 2023
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
  );
};

export default InvoiceThirdHead;
