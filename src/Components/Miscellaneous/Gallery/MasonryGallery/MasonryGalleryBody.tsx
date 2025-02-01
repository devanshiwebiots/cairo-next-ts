import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj, MasonryImageData } from "@/Data/Gallery";
import { Href, ImagePath } from "@/Constant";
import Link from "next/link";

const MasonryGalleryBody = () => {
  return (
    <Gallery>
      <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
        {MasonryImageData.map((item, index) => (
          <figure key={index} className="m-0">
            <Item original={`${ImagePath}/${item.src}`} width="700" height={"850"}>
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <img className="img-thumbnail mb-4" ref={ref} src={`${ImagePath}/${item.src}`} alt="images" />
                </Link>
              )}
            </Item>
          </figure>
        ))}
      </Masonry>
    </Gallery>
  );
};

export default MasonryGalleryBody;
