import { Categories } from "@/Constant";
import { CategoriesCheckBoxData } from "@/Data/Learning";
import { Input, Label } from "reactstrap";

const CategoriesCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-500">{Categories}</span>
      </div>
      {CategoriesCheckBoxData.map((item, index) => (
        <Label className="d-block mb-2" htmlFor={`categories-${index}`} key={index}>
          <Input className="checkbox_animated" id={`categories-${index}`} type="checkbox" /> {item}
        </Label>
      ))}
    </div>
  );
};

export default CategoriesCheckBox;
