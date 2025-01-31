import { AllAbout, Href } from "@/Constant";
import { VideoTab2Data } from "@/Data/SearchResult";
import Link from "next/link";
import { Col } from "reactstrap";

const VideoTab2 = () => {
  return (
    <Col xxl="6">
      <h4 className="mb-2">{AllAbout}</h4>
      {VideoTab2Data.map((item) => (
        <div className="d-flex info-block" key={item.id}>
          <iframe className="me-3" width={"200"} height={"100"} src={item.videoLink} title="videos"></iframe>
          <div className="flex-grow-1">
            <Link href={Href}>{item.url}</Link>
            <h5>{item.title}</h5>
            <div className="star-ratings">
              <ul className="search-info">
                <li>{item.star}</li>
                <li>{item.vote}</li>
                <li>{item.news}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Col>
  );
};

export default VideoTab2;
