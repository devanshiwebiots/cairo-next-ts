import { Href, ImagePath } from "@/Constant";
import { ScrollableDataList } from "@/Data/Uikits/Lists";
import Image from "next/image";
import { Fragment } from "react";
import { ListGroupItem } from "reactstrap";

export const DynamicScrollableLists = () => {
  return (
    <Fragment>
      {ScrollableDataList.map(({ src, title, mail, days }, index) => (
        <ListGroupItem tag="a" className="list-group-item-action list-hover-primary" href={Href} key={index}>
          <div className="list-wrapper gap-0">
            <Image className="list-img" src={`${ImagePath}/${src}`} alt="profile" width={55} height={55}/>
            <div className="list-content">
              <h6>{title}</h6>
              <p>{mail}</p>
              <small className="text-muted">{days}</small>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </Fragment>
  );
};
