import { CommonUserFormGroupType } from "@/Types/UserType";
import { FormGroup, Input, Label } from "reactstrap";

const CommonUserFormGroup :React.FC<CommonUserFormGroupType> = ({ type, title, placeholder,defaultValue,row }) => {
  return (
    <FormGroup>
      <Label check className="mb-0">{title}</Label>
      <Input type={type} placeholder={placeholder} defaultValue={defaultValue} rows={row} className='mt-1'/>
    </FormGroup>
  );
};

export default CommonUserFormGroup;
