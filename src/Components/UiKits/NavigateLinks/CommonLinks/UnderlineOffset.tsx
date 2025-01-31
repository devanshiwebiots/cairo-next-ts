import { Href, Underlineopacity } from '@/Constant'
import { UnderlineOffsetData } from '@/Data/Uikits/NavigateLinks'
import Link from 'next/link'
import { Col } from 'reactstrap'

const UnderlineOffset = () => {
  return (
    <Col sm="6" xxl="3">
      <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title">{Underlineopacity}</h6>
        <div className="underline-opacity-wrapper">
          <p>
            <Link href={Href}>Default link</Link>
          </p>
          {UnderlineOffsetData.map((data,index) => (
            <p key={index}>
              <Link href={Href} className={`link-offset-${data}`}>
                Offset {data} link
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default UnderlineOffset;
