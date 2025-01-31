import { AccordionItemProps } from "@/Types/UikitsType";
import React from "react";
import { ChevronDown } from "react-feather";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const CommonAccordionItem: React.FC<{ item: AccordionItemProps }> = ({ item }) => {
  return (
    <AccordionItem className={item.accordionItemClass}>
      <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
        {item.iconWithTitle && item.iconWithTitle}
        <span className={item.spanClass}>{item.accordionHeading}</span>
        {item.icon && <ChevronDown className={`svg-color ${item.spanClass}`} />}
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>{item.bodyContent}</AccordionBody>
    </AccordionItem>
  );
};

export default CommonAccordionItem;
