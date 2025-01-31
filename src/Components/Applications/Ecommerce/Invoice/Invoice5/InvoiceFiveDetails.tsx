import { InvoiceFourDetailsData } from "@/Data/Invoice";

const InvoiceFiveDetails = () => {
  return (
    <td>
      <table className="w-100" style={{ borderSpacing: "4px", marginBottom: "20px" }}>
        <tbody>
          <tr>
            {InvoiceFourDetailsData.map(({ title, value }, index) => (
              <td style={{ background: "#F5F6F9", padding: "15px 25px" }} key={index}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#52526C", opacity: "0.8", margin: "0", lineHeight: "2" }}>{title} :</p>
                <span style={{ fontSize: 18, fontWeight: 500 }}>{value}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceFiveDetails;
