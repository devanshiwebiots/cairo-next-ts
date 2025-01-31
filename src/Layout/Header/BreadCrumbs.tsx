import SVG from '@/CommonComponent/SVG';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const symbolRegex = /[!@#\$%\^&\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~\-=]/g;
  const pathParts = pathname.split("/").slice(1).map((item) => item.replace(symbolRegex, " "));
  const [firstPart, secondPart, thirdPart] = pathname.split("/").slice(1).map((item) => item.replace(symbolRegex, " "));
  const title = pathParts[pathParts.length - 1];

  return (
    <Container fluid>
      <div className='page-title'>
        <Row>
          <Col sm='6'>
            <h3 className="text-capitalize">{title}</h3>
          </Col>
          <Col sm='6'>
          <Breadcrumb className="justify-content-sm-start align-items-center">
          <BreadcrumbItem><Link href={`/dashboard/default_dashboard`}><SVG iconId='stroke-home' /></Link></BreadcrumbItem>
          <BreadcrumbItem className={`f-w-400 text-capitalize`}>{firstPart}</BreadcrumbItem>
          <BreadcrumbItem className={`f-w-400 ${!thirdPart ? "active" : ""}`}>{secondPart}</BreadcrumbItem>
          {thirdPart && <BreadcrumbItem className={`f-w-400 active`}>{thirdPart}</BreadcrumbItem>}
        </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
