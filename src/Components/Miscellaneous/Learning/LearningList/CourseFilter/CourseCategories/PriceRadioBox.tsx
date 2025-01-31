import { Price } from "@/Constant";
import { PriceRadioBoxData } from "@/Data/Learning";
import { Input, Label } from "reactstrap";

const PriceRadioBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-500">{Price}</span>
      </div>
      {PriceRadioBoxData.map((item, index) => (
        <Label htmlFor={`edo-ani-${index}`} className="d-block mb-2" key={index}>
          <Input type="radio" className="radio_animated" id={`edo-ani-${index}`} name="rdo-ani" /> {item}
        </Label>
      ))}
    </div>
  );
};

export default PriceRadioBox;
