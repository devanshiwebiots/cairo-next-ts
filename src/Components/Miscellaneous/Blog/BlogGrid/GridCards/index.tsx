import RatioImage from "@/CommonComponent/RatioImage";
import SVG from "@/CommonComponent/SVG";
import { Href, ImagePath } from "@/Constant";
import { GridCardsList } from "@/Data/Blog";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const GridCards = () => {
  const [wishlist, SetWishlist] = useState(Array(GridCardsList.length).fill(false));
  const handleWishlist = (id: number) => SetWishlist(wishlist.map((item, i) => (i === id ? !item : item)));

  return (
    <Fragment>
      {GridCardsList.map(({ headerImg, bodyImg, name, date, skill, description, view, icon, svgIcon }, index) => (
        <Col xxl="4" xl="6" lg="4" sm="6" key={index}>
          <Card className="grid-cards">
            <CardHeader className="p-0 border-0">
              <RatioImage src={`${ImagePath}/blog/${headerImg}`} className="img-fluid" />
            </CardHeader>
            <CardBody>
              <div className="d-flex gap-2 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={`${ImagePath}/blog/${bodyImg}`} className="img-fluid" alt="" width={40} height={40} unoptimized/>
                </div>
                <div className="flex-grow-1">
                  <h6>{name}</h6> <p className="mb-0">{date}</p>
                </div>
                {icon}
              </div>
              <h5>{skill}</h5>
              <p>
                {description}
                <Link href={Href} className="font-danger mx-1">
                  Read more...
                </Link>
              </p>
              <ul className="d-flex gap-3 justify-content-between">
                <li>{view}</li>
                <li className={`blog-like${wishlist[index] ? " clicked-color" : ""}`} onClick={() => handleWishlist(index)}>
                  <SVG iconId={svgIcon} />
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default GridCards;
