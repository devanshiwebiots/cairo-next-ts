import { descriptionGallery, Href, ImagePath, MyPortfolioTitle } from "@/Constant";
import { GalleryGridImages } from "@/Data/Gallery";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export const DescriptionMyGallery = () => {

  return (
    <Gallery withCaption>
      {GalleryGridImages.map((item, index) => (
        <figure key={index} className="col-xl-3 col-md-4 col-sm-6 m-0" itemProp="caption description">
          <Item original={`${ImagePath}/${item}`} width="1500" height="850" caption={`${MyPortfolioTitle}\n${descriptionGallery}`}>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1"  ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="thumbnail" />
                <div className="caption border-top-0 p-2">
                  <h4>{MyPortfolioTitle}</h4>
                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};
