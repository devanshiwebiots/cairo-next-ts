import { Href } from '@/Constant'
import { ColoredBreadcrumDataList } from '@/Data/BonusUi/Breadcrumb'
import React, { Fragment } from 'react'
import { BreadcrumbItem } from 'reactstrap'

const DynamicColoredBreadcrumb = () => {
  return (
   <Fragment>
    {ColoredBreadcrumDataList.map(({ className, span }, index) => (
        <ol className={`breadcrumb breadcrumb-colored ${className}`} key={index}>
          {span.map(({ title, activeTitle }, index) => (
            <Fragment key={index}>
              {title && (
                <BreadcrumbItem><a className="fw-bold" href={Href}>{title}</a></BreadcrumbItem>
              )}
              {activeTitle && <BreadcrumbItem active className="fw-bold bg-transparent">{activeTitle}</BreadcrumbItem>}
            </Fragment>
          ))}
        </ol>
      ))}
   </Fragment>
  )
}

export default DynamicColoredBreadcrumb
