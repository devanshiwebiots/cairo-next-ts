import { ThankYouBold, ThankYouItalic } from "@/Constant";

export const BasicTooltipData = [
    {
      text: " Use the ",
      code: "data-bs-title",
    },
    {
      text: " to change tooltip title and ",
      code: "data-bs-toggle",
    },
    {
      text: " to add tooltip attribute.",
    },
  ];

    
  export const ColorTooltipData = [
    {
      text: " Use the ",
      code: "btn- *",
    },
    {
      text: "to change dark background color and ",
      code: "data-bs-placement='*' ",
    },
    {
      text: "to tooltip positions change.",
    },
  ];

  export const ColorTooltipList = [
    {
      id: 4,
      btnColor: "secondary",
      tooltip: "Secondary",
      btntext: "Secondary",
      placement: "top",
    },
    {
      id: 5,
      btnColor: "warning",
      tooltip: "Warning",
      btntext: "Warning",
      placement: "top",
    },
    {
      id: 6,
      btnColor: "success",
      tooltip: "Success",
      btntext: "Success",
      placement: "top",
    },
    {
      id: 7,
      btnColor: "danger",
      tooltip: "Danger",
      btntext: "Danger",
      placement: "top",
    },
    {
        id: 8,
        btnColor: "info",
        tooltip: "Info",
        btntext: "Info",
        placement: "top",
      },
  ];

  export const LightTooltipsSpan = [
    {
        text: ' Use the',
        code: 'button-light-*'
    }, 
    {
        text: 'to change light background color and ',
        code: "data-bs-placement='*'"
    },
    {
        text :'to tooltip positions change.'
    }
  ]

  export const LightColorTooltipList = [
    {
        id: 1,
        btnColor: "light-primary",
        tooltip: "Primary",
        btntext: "Primary",
        placement: "top",
    },
    {
        id: 2,
        btnColor: "light-secondary",
        tooltip: "Secondary",
        btntext: "Secondary",
        placement: "top",
    },
    {
        id: 3,
        btnColor: "light-warning",
        tooltip: "Warning",
        btntext: "Warning",
        placement: "top",
    },
    {
        id: 4,
        btnColor: "light-success",
        tooltip: "Success",
        btntext: "Success",
        placement: "top",
    },
    {
        id: 5,
        btnColor: "light-danger",
        tooltip: "Danger",
        btntext: "Danger",
        placement: "top",
    },
    {
        id: 6,
        btnColor: "light-info",
        tooltip: "Info",
        btntext: "Info",
        placement: "top",
    },
];

export const DirectionTooltipData = [
  {
    text: " Use the ",
    code: "btn-*",
  },
  {
    text: " to change dark background color and",
    code: " data-bs-placement='*'",
  },
  {
    text: "[top/right/bottom/left] to tooltip direction change.",
  },
];

export const DirectionTooltipList = [
  {
    id: 30,
    placement: "top",
    tooltip: "Tooltip on top",
    btntext: "Tooltip on top",
    btnColor: "primary",
  },
  {
    id: 9,
    placement: "right",
    tooltip: "Tooltip on right",
    btntext: "Tooltip on right",
    btnColor: "secondary",
  },
  {
    id: 10,
    placement: "bottom",
    tooltip: "Tooltip on bottom",
    btntext: "Tooltip on bottom",
    btnColor: "success",
  },
  {
    id: 11,
    placement: "left",
    tooltip: "Tooltip on left",
    btntext: "Tooltip on left",
    btnColor: "warning",
  },
];

export const HoverTooltipData = [
  {
    text: " Use the ",
    code: "bg-*-light",
  },
  {
    text: " to change light background color and ",
    code: "data-bs-title '",
  },
  {
    text: " to the content under the HTML tag.",
  },
];

export const HoverTooltipList = [
  {
    id: 31,
    tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouItalic }}></div>,
    btntext: "Notifications Received",
    className: "bg-primary",
    placement: "top",
    btnColor: "primary",
  },
  {
    id: 13,
    tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
    btntext: "Last Warning",
    className: "bg-warning",
    placement: "top",
    btnColor: "warning",
  },
  {
    id: 14,
    tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouItalic }}></div>,
    btntext: "It's Danger",
    className: "bg-danger",
    placement: "top",
    btnColor: "danger",
  },
  {
    id: 15,
    tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
    btntext: "Coming Soon",
    className: "bg-info",
    placement: "top",
    btnColor: "info",
  },
];

export const FillTooltipData = [
  {
    text: "Tooltip in hover effect through fill dark color.",
    code: "[.btn-outline-*]",
  },
  {
    text: " and ",
    code: "data-bs-title ",
  },
  {
    text: "to the content under the HTML Tag.",
  },
];

export const FillTooltipList = [
  {
    id: 33,
    tooltip: "Tooltip Primary",
    btntext: "Tooltip Primary",
    btnColor: "primary",
    placement: "top",
  },
  {
    id: 17,
    tooltip: "Tooltip Secondary",
    btntext: "Tooltip Secondary",
    btnColor: "secondary",
    placement: "top",
  },
  {
    id: 18,
    tooltip: "Tooltip Success",
    btntext: "Tooltip Success",
    btnColor: "success",
    placement: "top",
  },
  {
    id: 19,
    tooltip: "Tooltip Info",
    btntext: "Tooltip Info",
    btnColor: "info",
    placement: "top",
  },
];