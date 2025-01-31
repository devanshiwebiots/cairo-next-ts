import { CommonCardHeaderProp } from '@/Types/UikitsType';
import React, { Fragment } from 'react';
import { CardHeader } from 'reactstrap';

const CommonUIkitsComponent: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass, spanClass }) => {
  return (
    <CardHeader className={headClass ? headClass : ''}>
      <div className="pb-0">
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
      </div>
    </CardHeader>
  );
}

export default CommonUIkitsComponent;