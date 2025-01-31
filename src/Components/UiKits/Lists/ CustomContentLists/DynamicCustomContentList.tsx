import { Href, ImagePath } from "@/Constant";
import { CustomList } from "@/Data/Uikits/Lists";
import Image from "next/image";
import React, { Fragment } from "react";
import { ListGroupItem } from "reactstrap";

const DynamicCustomContentList = () => {
  return (
    <Fragment>
      {CustomList.map(({ src, title, mail, days, text, smallText }, index) => (
        <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="list-wrapper">
              <Image className="list-img" src={`${ImagePath}/${src}`} alt="profile" width={55} height={55}/>
              <div className="list-content">
                <h6>{title}</h6>
                <p>{mail}</p>
              </div>
            </div>
            <small>{days}</small>
          </div>
          <p className="mb-1">{text}</p>
          <small className="text-black">{smallText}</small>
        </ListGroupItem>
      ))}
    </Fragment>
  );
};

export default DynamicCustomContentList;
