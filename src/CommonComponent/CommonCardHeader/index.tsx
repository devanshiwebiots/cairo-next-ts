import { CommonCardHeaderProp } from '@/Types/UikitsType';
import React, { Fragment } from 'react';
import { CardHeader } from 'reactstrap';

const CommonCardHeader: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass, spanClass }) => {
  return (
    <CardHeader className={headClass ? headClass : ''}>
      <h4 className={tagClass ? tagClass : ''}>{icon && icon}{title}</h4>
      {span && (
        <p className={spanClass ? spanClass : ''}>
          {span.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code style={{fontSize:'12px'}}>{data.code}</code>} {data.mark && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonCardHeader;
