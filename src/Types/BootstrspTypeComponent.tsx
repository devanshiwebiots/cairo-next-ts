import React from 'react';

export interface TableDetailProps {
  detail: {
    text: string;
    code?: string;
  };
}

export interface TableRowProps {
  component: {
    tdClassName?: string;
    title: string;
    tableColData: React.ReactNode;
    details: TableDetailProps['detail'][];
  };
}

export interface CommonTableComponentProp {
  title: string;
  data: TableRowProps['component'][];
  tableClass?: string;
}

export type UiComponentDataType = TableRowProps['component'];
