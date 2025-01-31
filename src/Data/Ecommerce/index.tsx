import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, OnlineOrder, OrdersValue, TotalSell } from "@/Constant";
import { ProductListTableDataColumnType, ProductListTableProduct } from "@/Types/EcommerceType";
import { ApexOptions } from "apexcharts";
import { Clock, CreditCard, Gift, Truck, XCircle } from "react-feather";
import { Badge } from "reactstrap";
import { AdmissionRatioChart, DailyOrderChart, OrderValueChart } from "./chartData";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import SVG from "@/CommonComponent/SVG";
import { useAppSelector } from "@/Redux/Hooks";
import { CartItem } from "@/Types/CartDataType";


export const TopSellData = [
    {
      class: "total-sells",
      title: TotalSell,
      image: "coin.png",
      count: "20,346",
      color: "success",
      percentage: "+ 40.08%",
      detail: "Compared to May 2024",
      chartId: "admissionRatio",
      chart: AdmissionRatioChart,
      iconColor: 'primary',
      className: 'col-sm-6'
    },
    {
      class: "total-sells",
      title: OrdersValue,
      image: "shopping.png",
      count: "45,347",
      color: "danger",
      percentage: "- 20.05%",
      detail: "Compared to April 2024",
      chartId: "order-value",
      chart: OrderValueChart,
      iconColor: 'secondary',
      className: 'col-sm-6'

    },
    {
      class: "total-sells",
      title: OnlineOrder,
      image: "sent1.png",
      count: "78,345",
      color: "success",
      percentage: "+ 35.70%",
      detail: "Compared to July 2024",
      chartId: "daily-value",
      chart: DailyOrderChart,
      iconColor: 'success',
      className: ''
    },
   
  ];

export const OrderStatusData = [
    {
      id: 1,
      title: 'Order Placed',
      description: 'Your Order has been received by us.',
      date: 'March 20',
      image: '4.png',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Order Packed',
      description: 'Your order is packaged and prepared for shipping.',
      date: 'March 25',
      image: '5.png',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'On the way',
      description: 'Your order was placed well.',
      date: 'April 2',
      image: '6.png'
    },
    {
      id: 4,
      title: 'Order Delivered',
      description: 'Our courier partner will deliver your order on April 3, 2024...',
      image: '7.png'
    },
  ]

export const CategorySummaryData = [
  {
    title: 'Tops for women',
    description : '25.4k Products Sold',
    color: 'primary'
  },
  {
    title: 'Phones and laptops',
    description : '32.6k Products Sold',
    color: 'secondary'
  },
  {
    title: 'Gardening tools',
    description : '15.8k Products Sold',
    color: 'success'
  },
]

export const CategorySummaryChart: ApexOptions = {
  chart: {
    height: 287,
    type: "radialBar",
    offsetX: -8,
    offsetY: -10,
  },
  plotOptions: {
    radialBar: {
      startAngle: 90,
      endAngle: -320,
      dataLabels: {
        show: true,
        value: {
          fontSize: "22px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: "500",
          color: "var(--body-font-color)",
        },
        total: {
          show: true,
          label: "Overview",
          fontSize: "14px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: "400",
          formatter: w => {
            return "68%";
          },
        },
      },
      track: {
        background: "var(--light-color)",
        strokeWidth: "90%",
        startAngle: -100,
        endAngle: 100,
      },
    },
  },
  colors: [
    '#015DBE', 
    '#FFB70D',
    '#61AE41',
  ],
  stroke: {
    lineCap: "round",
  },
  series: [75, 60, 45],
  responsive: [
    {
      breakpoint: 1830,
      options: {
        chart: {
          height: 260,
          offsetX: 2,
          offsetY: 10,
        },
      },
    },
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 240,
        },
      },
    },
    {
      breakpoint: 1630,
      options: {
        chart: {
          height: 220,
        },
      },
    },
    {
      breakpoint: 1530,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 307,
          offsetX: 0,
          offsetY: 0,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 245,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 307,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          height: 290,
        },
      },
    },
    {
      breakpoint: 500,
      options: {
        chart: {
          height: 250,
        },
        plotOptions: {
          radar: {
            size: 50,
          },
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

export const CurrentCustomersData = [
  {
    image: '1.jpg',
    name: 'Hailey Brown',
    email: 'hailey05@gmail.com',
    price: '$340.35',
    discount: '255 Sale'
  },
  {
    image: '2.jpg',
    name: 'Brian Adams',
    email: 'brian77@gmail.com',
    price: '$346.15',
    discount: '563 Sale'
  },
  {
    image: '3.jpg',
    name: 'Adley Allen',
    email: 'adley@gmail.com',
    price: '$756.34',
    discount: '348 Sale'
  },
  {
    image: '4.jpg',
    name: 'Peter Clarke',
    email: 'peter55@gmail.com',
    price: '$514.37',
    discount: '376 Sale'
  },
  {
    image: '5.jpg',
    name: 'Darby Jones',
    email: 'darby45@gmail.com',
    price: '$346.68',
    discount: '405 Sale'
  },
  {
    image: '6.jpg',
    name: 'Martin Roberts',
    email: 'martin@gmail.com',
    price: '$645.78',
    discount: '145 Sale'
  },
  {
    image: '7.jpg',
    name: 'Clark Smith',
    email: 'clark117@gmail.com',
    price: '$258.36',
    discount: '670 Sale'
  },
]

export const TrendingProductsData = [
  {
    discount: '-50%',
    image: '2.png',
    name: 'Jumper Shoes'
  },
  {
    discount: '-15%',
    image: '3.png',
    name: 'Adidas Shoes'
  },
  {
    discount: '-30%',
    image: '4.png',
    name: 'Puma Sports'
  },
  {
    discount: '-27%',
    image: '5.png',
    name: 'JNike Sports'
  },

]

export const LatestSalesChart : ApexOptions = {
    series: [
      {
        data: [
          {
            "x": "Jan",
            "y": [180, 420]
          },
          {
            "x": "",
            "y": [170, 470]
          },
          {
            "x": "Feb",
            "y": [200, 450]
          },
          {
            "x": "",
            "y": [160, 380]
          },
          {
            "x": "Mar",
            "y": [170, 410]
          },
          {
            "x": "",
            "y": [180, 280]
          },
          {
            "x": "Apr",
            "y": [200, 420]
          },
          {
            "x": "",
            "y": [140, 300]
          },
          {
            "x": "May",
            "y": [190, 400]
          },
          {
            "x": "",
            "y": [160, 300]
          },
          {
            "x": "Jun",
            "y": [160, 480]
          },
          {
            "x": "",
            "y": [180, 420]
          },
          {
            "x": "Jul",
            "y": [160, 400]
          },
          {
            "x": "",
            "y": [180, 400]
          },
          {
            "x": "Aug",
            "y": [140, 360]
          }
        ],
      },
    ],
    chart: {
        type: 'rangeBar',
        height: 320,
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    grid: {
        show: true,
        borderColor: 'rgba(106, 113, 133, 0.30)',
        strokeDashArray: 3,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#015DBE'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [65, 35]
        }
    },
    tooltip: {
        enabled: false,
    },
    colors: ['#FFB70D'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '35%',
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false,
    },
  
    yaxis: {
        logBase: 100,
        tickAmount: 4,
        min: 100,
        max: 500,
        labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 34,
  
            formatter: (value) => {
                return `${value}k`;
            },
  
            style: {
                fontFamily: "Rubik', sans-serif",
                fontWeight: 500,
                colors: '#3D434A',
            },
        },
    },
    xaxis: {
        categories: ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', '', 'May', '', 'Jun', '', 'Jul', '', 'Aug'],
        labels: {
            minHeight: undefined,
            maxHeight: 24,
            offsetX: 0,
            offsetY: 0,
  
            style: {
                fontFamily: "Rubik', sans-serif",
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
        tooltip: {
            enabled: false,
        },
    },
    responsive: [
        {
            breakpoint: 1400,
            options: {
                series: [
                    {
                        data: [
                          {
                            "x": "Jan",
                            "y": [180, 420]
                          },
                          {
                            "x": "",
                            "y": [170, 470]
                          },
                          {
                            "x": "Feb",
                            "y": [200, 450]
                          },
                          {
                            "x": "",
                            "y": [160, 380]
                          },
                          {
                            "x": "Mar",
                            "y": [170, 410]
                          },
                          {
                            "x": "",
                            "y": [180, 280]
                          },
                          {
                            "x": "Apr",
                            "y": [200, 420]
                          },
                          {
                            "x": "",
                            "y": [140, 300]
                          },
                        ],
                    },
                ],
                chart: {
                  height: 328,
              },
            },
        },
        {
            breakpoint: 1199,
            options: {
                series: [
                    {
                        data: [
                          {
                            "x": "Jan",
                            "y": [180, 420]
                          },
                          {
                            "x": "",
                            "y": [170, 470]
                          },
                          {
                            "x": "Feb",
                            "y": [200, 450]
                          },
                          {
                            "x": "",
                            "y": [160, 380]
                          },
                          {
                            "x": "Mar",
                            "y": [170, 410]
                          },
                          {
                            "x": "",
                            "y": [180, 280]
                          },
                          {
                            "x": "Apr",
                            "y": [200, 420]
                          },
                          {
                            "x": "",
                            "y": [140, 300]
                          },
                          {
                            "x": "May",
                            "y": [190, 400]
                          },
                          {
                            "x": "",
                            "y": [160, 300]
                          },
                          {
                            "x": "Jun",
                            "y": [160, 480]
                          },
                          {
                            "x": "",
                            "y": [180, 420]
                          },
                          {
                            "x": "Jul",
                            "y": [160, 400]
                          },
                          {
                            "x": "",
                            "y": [180, 400]
                          },
                          {
                            "x": "Aug",
                            "y": [140, 360]
                          },
                        ],
                    },
                ],
            },
        },
        {
            breakpoint: 500,
            options: {
                series: [
                    {
                        data: [
                          {
                            "x": "Jan",
                            "y": [180, 420]
                          },
                          {
                            "x": "",
                            "y": [170, 470]
                          },
                          {
                            "x": "Feb",
                            "y": [200, 450]
                          },
                          {
                            "x": "",
                            "y": [160, 380]
                          },
                          {
                            "x": "Mar",
                            "y": [170, 410]
                          },
                          {
                            "x": "",
                            "y": [180, 280]
                          },
                          {
                            "x": "Apr",
                            "y": [200, 420]
                          },
                          {
                            "x": "",
                            "y": [140, 300]
                          },
                          {
                            "x": "May",
                            "y": [190, 400]
                          },
                        ],
                    },
                ],
            },
        },
    ],
};

export const ProductsOverviewChart : ApexOptions = {
      series: [
        {
          name: "Effectively Sold",
          type: "area",
          data: [40, 38, 34, 25, 37, 42, 25],
        },
        {
          name: "Items Viewer", 
          type: "area", 
          data: [20, 30, 25, 35, 28, 25, 45],
        },
      ],
      chart: {
        height: 330,
        type: "line",
        stacked: false,
        toolbar: {
          show: false, 
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          color: "#000",
          opacity: 0.08,
        },
      },
      stroke: {
        width: [2, 2, 2],  
        curve: "straight",
      },
      grid: {
        show: true,
        borderColor: "var(--chart-border)", 
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ['#015DBE' ,'#FFB70D'],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          opacityFrom: 0.4,
          opacityTo: 0, 
          stops: [0, 100],
        },
      }, 
      labels: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ],
      markers: {
        size: 5
      },
      xaxis: {
        type: "category",
        tickAmount: 4,
        tickPlacement: "between",
        tooltip: {
          enabled: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
              fontFamily: "Rubik', sans-serif",
              fontWeight: 500,
              colors: '#8D8D8D',
          },
      },
      },
      legend: {
        show: true,
      },
      yaxis: {
        tickAmount: 4,
        min: 10,
        max: 60,
        show: true,
        labels: {
          formatter: val => {
            return "$" + val + "k" + "";
          },
          style: {
            fontFamily: "Rubik', sans-serif",
            fontWeight: 500,
            colors: '#3D434A',
         },
        },
      },
      tooltip: {
        shared: false,
        intersect: false,
      },
      responsive: [
        {
          breakpoint: 1720,
          options: {
            chart: {
              height: 318,
            },
          },
        },
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: 300,
            },
          },
        },
      ]
};

export const RecentOrdersData = [
  {
    image: "1.png",
    order: "House Plants",
    date: "15 May 2024",
    quantity: "QTY:20",
    image1: "1.png",
    name: "Amelia Jones",
    amount: "$560.25",
    status: "Succeed",
    color: "success",
  },
  {
    image: "2.png",
    order: "Modern Calender",
    date: "20 Apr 2024",
    quantity: "QTY:25",
    image1: "2.png",
    name: "Mason Davis",
    amount: "$145.10",
    status: "Succeed",
    color: "success",
  },
  {
    image: "3.png",
    order: "Fancy Mug",
    date: "	10 Jun 2024",
    quantity: "QTY:12",
    image1: "3.png",
    name: "Harpy Wilson",
    amount: "$357.34",
    status: "Waiting",
    color: "warning",
  },
  {
    image: "4.png",
    order: "Night Table Lamp",
    date: "	16 Feb 2024",
    quantity: "QTY:16",
    image1: "4.png",
    name: "Noah Jackson",
    amount: "$478.14",
    status: "Canceled",
    color: "danger",
  },
  {
    image: "5.png",
    order: "Smart Watch",
    date: "	24 Aug 2024",
    quantity: "QTY:22",
    image1: "5.png",
    name: "Luna Garcia",
    amount: "$541.25",
    status: "Succeed",
    color: "success",
  },
]
export const FilterProductData = [
  {
    id: 2,
    colClass: "col-xl-6 col-sm-6",
    filterData: ["1", "2"],
  },
  {
    id: 3,
    colClass: "col-xl-4 col-sm-4",
    filterData: ["3", "4", "5"],
  },
  {
    id: 4,
    colClass: "col-xl-3 col-sm-3",
    filterData: ["6", "7", "8", "9"],
  },
  {
    id: 6,
    colClass: "col-xl-2 col-md-4 col-sm-5",
    filterData: ["10", "11", "12", "13", "14", "15"],
  },
];

export const ProductSliderOne = [
  {
    image: "01.jpg",
    title: "Woman T-shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Dream Beauty Fashion",
    text: "$150.00",
  },
  {
    image: "03.jpg",
    title: "VOXATI",
    text: "$200.00",
  },
];

export const ProductSliderTwo = [
  {
    image: "01.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "03.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
];

export const ProductSocialLinks = [
  {
    link: "https://www.facebook.com/",
    text: "facebook",
  },
  {
    link: "https://accounts.google.com/",
    text: "google-plus",
  },
  {
    link: "https://twitter.com/",
    text: "twitter",
  },
  {
    link: "https://www.instagram.com/",
    text: "instagram",
  },
  {
    link: "https://rss.app/",
    text: "rss",
  },
];

export const ProductBrandData = [
  {
    icon: <Truck />,
    text: "Free Shipping",
    span: "Free Shipping World Wide",
  },
  {
    icon: <Clock />,
    text: "24 X 7 Service",
    span: "Online Service For New Customer",
  },
  {
    icon: <Gift />,
    text: "Festival Offer",
    span: "New Online Special Festival",
  },
  {
    icon: <CreditCard />,
    text: "Online Payment",
    span: "Contrary To Popular Belief. ",
  },
];
export const ProductListTableData = [
  {
    image: "product-lists/product-categories/laptop.png",
    name: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product-lists/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/ipad.png",
    name: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: 45000.0,
    quantity: 10,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/mouse.png",
    name: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/dvd.png",
    name: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: 5600.0,
    quantity: 10,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/speaker.png",
    name: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: 12200.0,
    quantity: 50,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product-lists/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product-lists/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "product-lists/product-categories/laptop.png",
    name: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product-lists/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product-lists/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 2,
  },
];
export const FiltersData = [
  {
    name: "Choose Product",
    options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];

const ProductListTableProductName: React.FC<ProductListTableProduct> = ({ images, name }) => {
  const imagePaths = `/assets/images/product_lists/product-categories/${images}`
  return (
    <div className="product-names my-2">
      <div className="light-product-box">
        <RatioImage className="img-fluid" src={`${ImagePath}/${images}`} alt="laptop" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const ProductListTableStatus: React.FC<ProductListTableProduct> = ({ name }) => {
  return (
    <Badge color="" className={`badge-${name === "Sold Out" ? "secondary" : "primary"}`}>
      {name}
    </Badge>
  );
};

const ProductListTableRating: React.FC<ProductListTableProduct> = ({ rate }) => {
  return <Rating initialValue={rate} size={17} fillColor="#FF8F0F " />;
};

const ProductListTableAction = () => {

  return (
    <div className="product-action">
      <Link href={`/ecommerce/add_product`}>
        <SVG iconId="stroke-editors" />
      </Link>
      <SVG iconId="trash" />
    </div>
  );
};

export const ProductListTableDataColumn = [
   {
    name: "Product Name",
    cell: (row: ProductListTableDataColumnType) => (
      <ProductListTableProductName images={row.image} name={row.name}  />
    ),
    sortable: true,
    grow: 2,
  },
  {
    name: "SKU",
    selector: (row: ProductListTableDataColumnType) => `${row.sku}`,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: ProductListTableDataColumnType) => `${row.category}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: ProductListTableDataColumnType) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Qty",
    selector: (row: ProductListTableDataColumnType) => `${row.quantity}`,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableStatus name={row.status} />,
  },
  {
    name: "Rating",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableRating rate={row.rating} />,
  },
  {
    name: "Action",
    cell: () => <ProductListTableAction />,
  },
];


export const AddProductNav = [
  {
    id: 1,
    icon: "product-detail",
    title: "Add Product Details",
    detail: "Add Product name & details",
  },
  {
    id: 2,
    icon: "product-gallery",
    title: "Product gallery",
    detail: "thumbnail & Add Product Gallery",
  },
  {
    id: 3,
    icon: "product-category",
    title: "Product Categories",
    detail: "Add Product category, Status and Tags",
  },
  {
    id: 4,
    icon: "pricing",
    title: "Selling prices",
    detail: "Add Product basic price & Discount",
  },
  {
    id: 5,
    icon: "advance",
    title: "Advance",
    detail: "Add Meta details & Inventory details",
  },
];

export const OrderData = [
  {
    id: 1,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 2,
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    id: 3,
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    id: 4,
    name: "Men dashed Denim jacket",
    image: "product-table-3.png",
  },
  {
    id: 5,
    name: "Blue shirt",
    image: "product-table-2.png",
  },
  {
    id: 6,
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    id: 7,
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    id: 8,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 9,
    name: "Women Shorts",
    image: "product-table-5.png",
  },
];

//  Cart

export const CartDataa: CartItem[] = [
  {
    id: 1,
    image: '1.png',
    productName: 'Long Top',
    Price: '21',
    quantity: 5,
    action: <XCircle />,
    total: '12456',
  },
  {
    id: 2,
    image: '13.png',
    productName: 'Fancy watch',
    Price: '50',
    quantity: 5,
    action: <XCircle />,
    total: '12456',
  },
  {
    id: 3,
    image: '4.png',
    productName: 'Man shoes',
    Price: '11',
    quantity: 5,
    action: <XCircle />,
    total: '12456',
  },
];

export const CartDataHeaderr = [
  'Prdouct', 'Product Name', 'Price', 'Quantity', 'Action', 'Total'
]

export const BookmarkData = [
  {
    id: 1,
    fillStar: false,
    image: "lightgallry/01.jpg",
    title: "Admin Template",
    website_url: "http://admin.pixelstrap.com//ltr/landing-page.html",
    desc: "is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.",
    collection: "General",
  },
  {
    id: 2,
    fillStar: false,
    image: "lightgallry/02.jpg",
    title: "Universal Template",
    website_url: "https://angular.pixelstrap.com/universal/landing",
    desc: "Universal is beautifully crafted, clean and modern designed admin theme",
    collection: "General",
  },
  {
    id: 3,
    fillStar: false,
    image: "lightgallry/03.jpg",
    title: "Angular Theme",
    website_url: "https://angular.pixelstrap.com/boho/landing",
    desc: "Boho is beautifully crafted, clean and modern designed admin theme",
    collection: "Fs",
  },
  {
    id: 4,
    fillStar: false,
    image: "lightgallry/04.jpg",
    title: "Multikart Admin",
    website_url: "http://themes.pixelstrap.com/multikart/back-end/index.html",
    desc: "Multikart Admin is modern designed admin theme",
    collection: "General",
  },
  {
    id: 5,
    fillStar: false,
    image: "lightgallry/05.jpg",
    title: "Ecommerece theme",
    website_url: "http://themes.pixelstrap.com/multikart",
    desc: "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.",
    collection: "General",
  },
  {
    id: 6,
    fillStar: false,
    image: "lightgallry/06.jpg",
    title: "Tovo app landing page",
    website_url: "http://vue.pixelstrap.com/tovo/home-one",
    desc: "Amazing Landing Page With Easy Customization",
    collection: "Fs",
  },
]

export const BookmarkDataOne = [
  {
    id: 1,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Admin Template",
    website_url: "http://admin.pixelstrap.com/cairo/ltr/landing-page.html",
    desc: "is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.",
    collection: "General",
  },
  {
    id: 2,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Universal Template",
    website_url: "https://angular.pixelstrap.com/universal/landing",
    desc: "Universal is beautifully crafted, clean and modern designed admin theme",
    collection: "General",
  },
  {
    id: 3,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Angular Theme",
    website_url: "https://angular.pixelstrap.com/cairo/landing",
    desc: "Boho is beautifully crafted, clean and modern designed admin theme",
    collection: "Fs",
  },
  {
    id: 4,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Multikart Admin",
    website_url: "http://themes.pixelstrap.com/multikart/back-end/index.html",
    desc: "Multikart Admin is modern designed admin theme",
    collection: "General",
  },
  {
    id: 5,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Ecommerece theme",
    website_url: "http://themes.pixelstrap.com/multikart",
    desc: "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.",
    collection: "General",
  },
  {
    id: 6,
    fillStar: false,
    image: "lightgallry/07.jpg",
    title: "Tovo app landing page",
    website_url: "http://vue.pixelstrap.com/tovo/home-one",
    desc: "Amazing Landing Page With Easy Customization",
    collection: "Fs",
  },
]

export const MultiWithHeaderData = [{ name: "NBA Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }, { name: "", divider: true }, { name: "NHL Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }];


export const WhishListProduct = [
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Denim jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue shirt",
    image: "product-table-2.png",
  },
  {
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue shirt",
    image: "product-table-2.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women shorts",
    image: "product-table-5.png",
  },
];

export const BecomeMemberData = [
  {
    title: 'Standard',
    amount: '10',
    benifit1: '50GB Disk Space',
    benifit2: '50 Email Accounts',
    benifit3: 'Maintenance',
    benifit4: '15 Subdomains'
  },
  {
    title: 'Premium',
    amount: '20',
    benifit1: '10% on all product',
    benifit2: '50 Email Accounts',
    benifit3: 'Maintenance',
    benifit4: '15 Subdomains'
  },
  {
    title: 'Auther pack',
    amount: '50',
    benifit1: 'Upload 50 product',
    benifit2: '50 Email Accounts',
    benifit3: 'Maintenance',
    benifit4: '15 Subdomains'
  },
  {
    title: 'Auther pack',
    amount: '50',
    benifit1: 'Upload 50 product',
    benifit2: '50 Email Accounts',
    benifit3: 'Maintenance',
    benifit4: '15 Subdomains'
  },
]

export const SimplePricingCardData = [
  {
    title: 'Standard',
    amount: 15,
  },
  {
    title: 'Business',
    amount: 25,
  },
  {
    title: 'Premium',
    amount: 35,
  },
  {
    title: 'Extra',
    amount: 45,
  },
]

export const TypesOfProductData = [
  {
    id: "radio-icon",
    check: true,
    title: "Fixed Price",
  },
  {
    id: "radio-icon4",
    title: "BOGO(Buy one, Get one)",
  },
  {
    id: "radio-icon5",
    title: "Seasonal or holiday discount",
  },
  {
    id: "radio-icon6",
    title: "Percentage-based discount(%)",
  },
  {
    id: "radio-icon7",
    title: "Volume or bulk discount",
  },
];

export const ProductFiveNavData = ["Inventory", "Additional Options", "Shipping"];
