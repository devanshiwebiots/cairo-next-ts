import { Togglebothelement, Togglefirstelement, Togglesecondelement } from "@/Constant";
import { CollapseButtonsProps } from "@/Types/UikitsType";
import { Button } from "reactstrap";

const CollapseButtons: React.FC<CollapseButtonsProps> = ({toggleFirst, toggleBoth, toggleSecond, openFirst, openSecond}) => {
    return (
      <div className="common-flex">
      <Button color="primary" onClick={toggleFirst} aria-expanded={openFirst}>
        {Togglefirstelement}
      </Button>
      <Button color="warning" onClick={toggleSecond} aria-expanded={openSecond}>
        {Togglesecondelement}
      </Button>
      <Button color="success" onClick={toggleBoth}>
        {Togglebothelement}
      </Button>
    </div>
    );
  };

  export default CollapseButtons