import { Href } from '@/Constant'
import { CommonTagCardBodyType } from '@/Types/UikitsType'
import React, { Fragment } from 'react'
import { Badge, CardBody } from 'reactstrap'

const CommonTagAndPillsCardBody: React.FC<CommonTagCardBodyType> = ({ data, number, pill }) => {
  return (
    <CardBody>
      <div className="badge-spacing">
        <Fragment>
          {data &&
            data.map(({ className, text }, index) => (
              <Badge pill={pill} color={text} className={`text-capitalize ${className}`} key={index}>
                {text}
              </Badge>
            ))}
          {number &&
            number.map(({ className, text, icon }, index) => (
              <a href={Href} className={`badge ${className}`} key={index}>
                {text && text} {icon && icon}
              </a>
            ))}
        </Fragment>
      </div>
    </CardBody>
  );
};

export default CommonTagAndPillsCardBody;
