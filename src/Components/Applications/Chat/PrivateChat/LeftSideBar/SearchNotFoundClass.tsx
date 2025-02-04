import { SearchNotFoundClassType } from "@/Types/ContactType";
import { Col } from "reactstrap";
import { ImagePath } from "@/Constant";
import RatioImage from "@/CommonComponent/RatioImage";

const SearchNotFoundClass :React.FC<SearchNotFoundClassType> = ({word}) => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center p-5">
        <RatioImage className="img-100 mb-4" src={`${ImagePath}/sad.gif`} alt="" />
          <p>{`Sorry, Not Found Any ${word}`}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
