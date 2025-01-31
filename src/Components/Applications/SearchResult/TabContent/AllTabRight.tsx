import { Href } from "@/Constant";
import { SearchTabRightData } from "@/Data/SearchResult";
import Link from "next/link";
import { Col } from "reactstrap";
import ShowRatings from "./ShowRatings";

const AllTabRight = () => {
  return (
    <Col xxl="6" xl="6" className="box-col-12">
      {SearchTabRightData.map((data, i) => (
        <div key={i} className="info-block">
          <Link href={Href}>{data.url}</Link>
          <h5>{data.title}</h5>
          <p>{data.detail}</p>
          <div className="star-ratings">
            <ul className="search-info">
              {data.showStar ? <ShowRatings item={data.showStar} /> : ""}
              <li>{data.star}</li>
              <li>{data.vote}</li>
              <li>{data.news}</li>
            </ul>
          </div>
        </div>
      ))}
    </Col>
  );
};

export default AllTabRight;
