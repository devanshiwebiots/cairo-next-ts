import { useAppDispatch } from "@/Redux/Hooks";
import { decrementData, incrementData } from "@/Redux/Reducers/CartSlice";
import { CartQuantityButtonProp, CartType } from "@/Types/EcommerceType";
import { Button, Input, InputGroup } from "reactstrap";

export const CartQuantityButton: React.FC<CartQuantityButtonProp> = ({item}) => {
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrementData({ item }));
  };

  const handleIncrement = () => {
    dispatch(incrementData({ item }));
  };
  console.log("Item total:", item.total);


  return (
    <td>
      <fieldset className="qty-box w-50 border-0">
        <InputGroup className="d-flex flex-nowrap">
          <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={handleDecrement}>
            <i className="fa fa-minus"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={item.total ?? 0} readOnly />
          <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={handleIncrement}>
            <i className="fa fa-plus"></i>
          </Button>
        </InputGroup>
      </fieldset>
    </td>
  );
};
