export const GridOptionSpan = [
    {
        text: ' Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize.'
    }
]

export const GridOptionHeadData = [
    {
        text: 'Small',
        size: '≥576px'
    },
    {
        text: 'Medium',
        size: '≥768px'
    },
    {
        text: 'Large',
        size: '≥992px'
    },
    {
        text: 'Extra large',
        size: '≥1200px'
    },
    {
        text: 'Extra extra large',
        size: '≥1400px',
        className: "digits",
    },
]

export const MaxcontainerwidthData = ['None (auto)' ,'540px', '720px', '960px', '1140px', '1320px']

export const ClassprefixData = ['.col-','.col-sm-','.col-md-','.col-lg-','.col-xl-','.col-xxl-']

export const GridOptionSideData = [
    {
        title: '# of columns',
        td: '12'
    },
    {
        title: 'Gutter width',
        td: '1.5rem (.75rem on left and right)'
    },
    {
        title: 'Nestable',
        td: 'Yes'
    },
    {
        title: 'Offsets',
        td: 'Yes'
    },
    {
        title: 'Column ordering',
        td: 'Yes'
    },
]

export const GridForColumnsSpan = [
    {
        text: 'Use predefined grid classes. Using ',
        code: 'col-md-* '
    },
    {
        text: 'you can set the grid system.'
    }
]

export const GridForColumnsData = ['1','2','2','3','4','5','7','6','6','8','4','9','3','10','2','12']

export const EnableFlexBehaviorsSpan = [
    {
        text: 'Use',
        code: 'd-flex '
    },
    {
        text: 'and',
        code: ' d-inline-flex'
    },
    {
        text: 'classes to set the flex behaviors.'
    }
]

export const HorizontalGuttersSpan = [
    {
        code: 'gx-*',
        text: 'classes can be used to control the horizontal gutter widths. The',
    },
    {
        code: 'container',
        text: 'or'
    },
    {
        code: 'container-fluid ',
        text: ' parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility.'
    }
]

export const VerticalGuttersSpan = [
    {
        code: 'gy-*',
        text: 'classes control vertical space between elements in rows, especially when they wrap and wider spacing can overflow the page and wrap the '
    },
    {
        code: ' row',
        text: 'with'
    },
    {
        code: 'overflow-hidden',
        text: 'to prevent this.'
    }
]

export const VerticalGuttersData = ['Custom column padding','Custom column padding','Custom column padding','Custom column padding']

export const RowColumnsGuttersSpan = [
    {
        text: 'Gutter classes can also be added to row columns. In the following example, we use responsive row columns and responsive gutter classes.'
    }
]

export const RowColumnsGuttersData = ['Row column','Row column','Row column','Row column','Row column','Row column','Row column','Row column','Row column','Row column']

export const NoGuttersSpan = [
    {
        text: 'Use',
        code: 'g-0'
    },
    {
        text: '  on the ',
        code: 'row'
    },
    {
        text: ' to eliminate spacing between columns. ',
        code: ' container '
    },
    {
        text: 'and use',
        code: ' mx-0'
    },
    {
        text: 'on the',
        code: 'row'
    },
    {
        text: 'to prevent overflow.'
    }
]

export const VerticalAlignmentSpan = [
    {
        text: 'Use',
        code: ' align-items-*'
    },
    {
        text: ' class to set the vertical alignment.'
    }
]

export const VerticalAlignmentData = [
    {
        title: 'one column',
        title2: 'Two column',
        alignItem: 'start'
    },
    {
        title: 'one column',
        title2: 'Two column',
        alignItem: 'center'
    },
    {
        title: 'one column',
        title2: 'Two column',
        alignItem: 'end'
    },
]

export const HorizontalAlignmentSpan = [
    {
        text: 'Use',
        code: ' justify-content-*'
    },
    {
        text: ' class to set the horizontal alignment.'
    }
]

export const NestingSpan = [
    {
        text: 'To nest your content with the default grid, add a new',
        code: ' row'
    },
    {
        text: ' and set of',
        code: 'col-sm-*'
    },
    {
        text: 'columns within an existing ',
        code: ' col-sm-*'
    },
    {
        text: '  column.'
    }
]

export const OrderSpan = [
    {
        text: 'Use',
        code :'order '
    },
    {
        text: 'class, you can set the order position.'
    }
]

export const OrderDataa = [
    {
        order: 'order-3',
        column: '3',
        item: 'First Item',
        className: ''
    },
    {
        order: 'order-first',
        column: '5',
        item: 'Second Item',
        className: ''
    },
    {
        order: 'order-last',
        column: '4',
        item: 'Third Item',
        className: ''
    },
    {
        order: 'order-2',
        column: '3',
        item: 'Fourth Item',
        className: ''
    },
    {
        order: 'order-5',
        column: '4',
        item: 'fifth Item',
        className: 'col-sm-2'
    },
    {
        order: 'order-4',
        column: '4',
        item: 'sixth Item',
        className: 'col-sm-6'
    },
]

export const OffsetSpan = [
    {
        text: 'Move columns to the right using ',
        code: '.offset-sm-* '
    },
    {
        text: 'classes. These classes increase the left margin of a column by ',
        code: '* '
    },
    {
        text: 'columns.'
    }
]

export const offsetList = [
    {
      extraSmallSize: "4",
      smallSize: "2",
      className: "offset-sm-2 offset-1",
      item: "col-2 offset-sm-2",
    },
    {
      extraSmallSize: "5",
      smallSize: "4",
      className: "offset-2",
      item: "col-4 offset-sm-2",
    },
    {
      extraSmallSize: "4",
      smallSize: "3",
      className: "offset-sm-2 offset-1",
      item: "col-3 offset-sm-2",
    },
  ];