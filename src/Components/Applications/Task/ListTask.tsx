import { Documentation, Href } from '@/Constant'
import React, { useRef } from 'react'
import { Printer } from 'react-feather'
import { useReactToPrint } from 'react-to-print'
import { Card, CardHeader } from 'reactstrap'
import CreatedByMe from './CreatedByMe'

const ListTask = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex pb-0">
        <h4 className="mb-0">{Documentation}</h4>
        <a href={Href} onClick={() => handlePrint()}>
          <Printer className="me-2" />
          Print
        </a>
      </CardHeader>
      <div ref={contentRef}>
        <CreatedByMe />
      </div>
    </Card>
  );
}

export default ListTask
