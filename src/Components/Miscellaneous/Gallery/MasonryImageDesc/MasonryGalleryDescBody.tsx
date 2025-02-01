import { descriptionGallery, Href, ImagePath, PortfolioTitle } from "@/Constant";
import { breakpointColumnsObjMasonry, MasonryImageData } from "@/Data/Gallery";
import Link from "next/link";
import React from "react";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";

const MasonryGalleryDescBody = () => {
  return (
    <Gallery withCaption>
      <Masonry breakpointCols={breakpointColumnsObjMasonry} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-3 col-sm-6">
        {MasonryImageData.map((item, index) => (
          <li style={{ listStyle: "none" }} key={index} className="p-0">
            <figure className="m-0">
              <Item original={`${ImagePath}/${item.src}`} width="700" height="750" caption={descriptionGallery}>
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/${item.src}`} alt="images" />
                    <div className="caption border-top-0 p-2">
                      <h4 className="mt-0">{PortfolioTitle}</h4>
                      <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    </div>
                  </Link>
                )}
              </Item>
            </figure>
          </li>
        ))}
      </Masonry>
    </Gallery>
  );
};

export default MasonryGalleryDescBody;
