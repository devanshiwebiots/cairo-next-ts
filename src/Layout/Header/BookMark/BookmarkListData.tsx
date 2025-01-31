import SVG from "@/CommonComponent/SVG";
import { AddNewBookmark, Bookmark, Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setFlip } from "@/Redux/Reducers/LayoutSlice";
import { useRouter } from "next/navigation";
import { Col, Row } from "reactstrap";

export const BookmarkListData = () => {
  const { bookmarkedData } = useAppSelector((state) => state.headerBookMark);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="front">
      <h5 className="f-18 f-w-600 mb-0 dropdown-title">{Bookmark}</h5>
      <ul className="bookmark-dropdown">
        <li className="custom-scrollbar">
          <Row>
          {bookmarkedData.map((item, index) => (
              <Col xs="4" className="text-center mb-2" key={index}>
                <div className="bookmark-content" onClick={() => router.push(`${item.path}`)}>
                  <div className={`bookmark-icon bg-light-${item.color ? item.color : "primary"}`}><SVG className={`stroke-icon stroke-${item.color ? item.color : "primary" }`} iconId={`stroke-${item.icon}`}/></div>
                  <span className={`font-${item.color ? item.color : "primary" }`}>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </li>
        <li className="text-center m-0" onClick={() => dispatch(setFlip())}>
            <a className="flip-btn btn btn-primary w-100" id="flip-btn" href={Href}>{AddNewBookmark}</a>
        </li>
      </ul>
    </div>
  );
};
