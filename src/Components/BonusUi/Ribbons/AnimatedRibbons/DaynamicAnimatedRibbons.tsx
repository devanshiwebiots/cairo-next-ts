import { AnimatedRibbonsList } from "@/Data/BonusUi/Ribbons";
import { CardData } from "@/Types/BonusUiType";
import { Fragment } from "react";

const DaynamicAnimatedRibbons = () => {
  return (
    <Fragment>
      {AnimatedRibbonsList.map(({ cardClass, colClass, ribbonWrapperClass, ribbonClass, ribbonIconClass, ribbonText, svgIconHref, mediaImageHref, mediaImageLabel, paragraphText }: CardData, index) => (
        <div key={index} className={colClass}>
          <div className={cardClass}>
            <div className={ribbonWrapperClass} style={{ minHeight: "225.391px" }}>
              {ribbonClass && (
                <div className={ribbonClass}>
                  {ribbonText && <span>{ribbonText}</span>}
                  {ribbonIconClass && <i className={ribbonIconClass}></i>}
                  {svgIconHref && (
                    <div>
                      <svg>
                        <use href={svgIconHref}></use>
                      </svg>
                    </div>
                  )}
                </div>
              )}
              <p dangerouslySetInnerHTML={{ __html: paragraphText }}></p>
              {mediaImageHref && (
                <div className="box">
                  <a className="media-image" href={mediaImageHref}>
                    <span className="label label-new">{mediaImageLabel}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default DaynamicAnimatedRibbons;
