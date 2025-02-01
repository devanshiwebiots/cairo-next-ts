import { ApexOptions } from 'apexcharts'

export const DashBoardBroweserList = [
  {
    id: 1,
    score: '+50%',
    image: 'chrome.png'
  },
  {
    id: 2,
    score: '+60%',
    image: 'explorer.png'
  },
  {
    id: 3,
    score: '+65%',
    image: 'firefox.png'
  },
  {
    id: 4,
    score: '+78%',
    image: 'safari.png'
  },
  {
    id: 5,
    score: '+82%',
    image: 'opera.png'
  },
  {
    id: 6,
    score: '+90%',
    image: 'microsoft.png'
  }
]

export const ShiftsOptionChart: ApexOptions = {

  labels: ["recalled", "provided", "acceptance", "new"],
  series: [60, 40, 50, 45],
  chart: {
    type: "donut",
    height: 294,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 6,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "83%",
        labels: {
          show: true,
          name: {
            offsetY: 4,
          },
          total: {
            show: true,
            fontSize: "20px",
            fontFamily: "Rubik', sans-serif",
            fontWeight: 600,
            label: "$ 25,575",
            formatter: () => "Total",
          },
        },
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  colors: ["#61AE41", "#26a7d6", "#FFB70D", "#015DBE"],
  responsive: [
    {
      breakpoint: 1370,
      options: {
        chart: {
          height: 290,
        },
      },
    },
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 260,
        },
      },
    },
  ]
};

export const ShiftsOverviewData = [
  {
    color: "primary",
    title: "New",
    count: 70,
  },
  {
    color: "secondary",
    title: "Acceptance",
    count: 85,
  },
  {
    color: "info",
    title: " Provided",
    count: 150,
  },
  {
    color: "success",
    title: "Recalled",
    count: 84,
  },
];

export const MonthSalesCHart: ApexOptions = {

  series: [
    {
      name: 'User',
      data: [300, 250, 340, 270, 350, 270, 370, 310, 180, 370, 320, 180],
    },
    {
      name: 'Penalty',
      data: [150, 230, 290, 360, 180, 240, 310, 210, 300, 340, 170, 230],
    },
  ],
  colors: ["#015DBE", "#FFB70D"],
  chart: {
    type: 'bar',
    height: 265,
    width: '100%',
    offsetY: 10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },

  grid: {
    show: false,
    padding: {
      left: -8,
      right: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 8,
      columnWidth: '45%',
      barHeight: '100%',
      dataLabels: {
        position: 'top',
      },
    },
  },

  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: true,
      format: 'dd MMM',
      formatter: undefined,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 400,
    logBase: 100,
    tickAmount: 4,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 420,
      options: {
        series: [
          {
            data: [300, 250, 340, 270, 350, 270, 370, 310],
          },
          {
            data: [150, 230, 290, 360, 180, 240, 310, 210],
          },
        ],
      },
    },
  ]
};

export const MonthSaleCurrentUserData = [
  {
    price: '$ 5,450',
    title: 'Current User',
    total: '1,25,000',
    description: '90% goal achieved'
  }
]

export const MonthSaleTotalPenaltyData = [
  {
    price: '$ 4,349',
    title: 'Total Penalty',
    total: '1,10,300',
    description: '55% goal achieved'
  }
]

export const ReactTransctionTableData = [
  {
    id: 1,
    image: '1.png',
    name: 'Emily Amber',
    date: '12 Aug 2024',
    amount: '$524.45',
    color: '#61AE41',
    type: 'Complete'
  },
  {
    id: 2,
    image: '2.png',
    name: 'Anna Catmire',
    date: '19 Mar 2024',
    amount: '$426.84',
    color: 'danger',
    type: 'Failed'
  },
  {
    id: 3,
    image: '3.png',
    name: 'Laura Dagson',
    date: '30 Jun 2024',
    amount: '$264.75',
    color: '#FF8F0F',
    type: 'Pending'
  },
  {
    id: 4,
    image: '4.png',
    name: 'Wade Warren',
    date: '24 Oct 2024',
    amount: '$642.23',
    color: '#61AE41',
    type: 'Complete'
  },
  {
    id: 5,
    image: '5.png',
    name: 'Rachel Green',
    date: '15 May 2024',
    amount: '$843.15',
    color: '#61AE41',
    type: 'Complete'
  },
];

export const ImportantTaskData = [
  {
    id: 1,
    title: 'App Development',
    name: 'Amerila Miller',
    email: 'amelia074@gmail.com',
    laug: 'Web Design',
    post: 'App Design',
    taskCom: '5/10',
    problem: '12',
    finished: '5',
    remark: '7',
    image: '16.png',
    color: 'primary',
    laugColor: 'primary',
    postColor: 'secondary'
  },
  {
    id: 2,
    title: 'Graphics Design',
    name: 'Daniel Anderson',
    email: 'anderson@gmail.com',
    laug: 'Photoshop',
    post: 'Dribbble Post',
    taskCom: '7/10',
    problem: '10',
    finished: '9',
    remark: '5',
    color: 'secondary',
    image: "18.png",
    laugColor: 'primary',
    postColor: 'warning'

  },
  {
    id: 3,
    title: 'Poster Design',
    name: 'Ava Brown',
    email: 'avabrown@gmail.com',
    laug: '3D Design',
    post: 'Social Post',
    taskCom: '4/10',
    problem: '16',
    finished: '10',
    remark: '7',
    color: 'info',
    image: '17.png',
    laugColor: 'success',
    postColor: 'secondary'

  },
  {
    id: 4,
    title: 'Web Development',
    name: 'James John',
    email: 'jamesjohn@gmail.com',
    laug: 'UI Design',
    post: 'View Editing',
    taskCom: '3/10',
    problem: '04',
    finished: '5',
    remark: '7',
    color: 'success',
    image: '19.png',
    laugColor: 'info',
    postColor: 'secondary'

  },
]

export const TrendingOrderData = [
  {
    image: 'product-1.png',
    price: '25.8K',
    brand: 'Latest shoes'
  },
  {
    image: 'product-2.png',
    price: '70.6K',
    brand: 'Fancy Purses'
  },
  {
    image: 'product-3.png',
    price: '50.4K',
    brand: 'New Cosmetics'
  }
]

export const TrendingOrderBodyData = [
  {
    id: 'F528',
    name: 'Branded Sneaker',
    image1: '1.png',
    image2: '2.png',
    image3: '3.png',
    date: '25 July',
    price: '$15,985',
    discount: '35.00%',
    status: 'Done',
    rounded: '15+'
  },
  {
    id: 'E568',
    name: 'Women Purse ',
    image1: '4.png',
    image2: '1.png',
    image3: '5.png',
    date: '10 August',
    price: '$50,124',
    discount: '50.00%',
    status: 'Pending',
    rounded: '8+'

  },
  {
    id: 'S634',
    name: 'Mens Caps ',
    image1: '6.png',
    image2: '7.png',
    date: '	25 March',
    price: '$58,748',
    discount: '95.00%',
    status: 'Done',

  },
  {
    id: 'D347',
    name: 'Women Tops ',
    image1: '8.png',
    image2: '9.png',
    image3: "1.png",
    date: '22 June',
    price: '$56,346',
    discount: '40.00%',
    status: 'Done',
    rounded: '7+'
  },
  {
    id: 'B634',
    name: 'Latest Phones ',
    image1: '10.png',
    image2: "11.png",
    image3: '12.png',
    date: '07 April',
    price: '$56,347',
    discount: '60.00%',
    status: 'Pending'
  },
]

export const SalesAnalyticsData = [
  {
    status: 'Pending',
    price: '($4,875)',
    color: 'secondary'
  },
  {
    status: 'Complete',
    price: '($1,450)',
    color: 'primary'
  }
]

export const SalesAnalyticsChart: ApexOptions = {

  chart: {
    height: 328,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  series: [{
    name: 'Pending',
    data: [90, 80, 100, 90, 80, 120, 100, 110, 80, 100, 80, 100]
  }, {
    name: 'Complete',
    data: [30, 120, 70, 80, 120, 60, 70, 80, 50, 60, 70, 140]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#848789",
        fontFamily: "nunito, sans-serif",
      },
    },
    axisBorder: {
      show: false
    },
  },
  yaxis: {
    labels: {
      formatter: val => {
        return val + "0" + "k";
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontFamily: "nunito, sans-serif",
      },
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  legend: {
    show: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  colors: ['#015DBE ', '#FFB70D']
}