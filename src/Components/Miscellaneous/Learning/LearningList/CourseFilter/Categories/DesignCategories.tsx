import { Design, Href } from "@/Constant";
import { DesignCategoriesData } from "@/Data/Learning";
import Link from "next/link";
import React from "react";
import { Badge } from "reactstrap";

const DesignCategories = () => {
  return (
    <div className="categories">
      <div className="learning-header">
        <span className="f-w-500">{Design}</span>
      </div>
      <ul>
        {DesignCategoriesData.map((item, index) => (
          <li key={index}>
            <Link href={Href}>{item.title}</Link>
            <Badge color="primary" className="pull-right">
              {item.badge}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignCategories;
