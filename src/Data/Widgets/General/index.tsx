import { ApexOptions } from "apexcharts"

export const TopGeneralData = [
    {
        title: 'Mobile App' ,
        email: 'joohety@gmail.com',
        date: '25-10-2024',
        Budget: '$36,000.00',
        Client: 'Joohee Lee',
        icon: 'mobile-app',
        image1: '20.png',
        image2: '21.png',
        image3:'22.png',
        status: 'Pending',
        color: 'primary',
        className: 'custom-col-25',
        Secondclass:""
    },
    {
        title: 'Banking Web' ,
        email: 'wonkyu@gmail.com',
        date: '12-04-2024',
        Budget: '$42,500.00',
        Client: 'Wonkyu Min',
        icon: 'banking-web',
        image1: '23.png',
        image2: '24.png',
        image3:'25.png',
        status: 'Done',
        color: 'secondary',
        className: 'custom-col-25',
        Secondclass:"banking-web"

    },
    {
        title: 'Finance App' ,
        email: 'yongjae@gmail.com',
        date: '10-09-2024',
        Budget: '$15,600.00',
        Client: 'Yongjae Choi',
        icon: 'finance-app',
        image1: '26.png',
        image2: '27.png', 
        status: 'Inprogress',
        color : 'success',
        className: 'custom-none',
        Secondclass:"finance-app"

    },
]

export const VisitorChart: ApexOptions = {
  series: [
    {
      name: "Active",
      data: [18, 50, 65, 18, 28, 70, 15, 35],
    },
    {
      name: "Bounce",
      data: [35, 70, 30, 60, 25, 45, 50, 50],
    },
  ],
  chart: {
    type: "bar",
    height: 240,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ['#FFB70D', '#015DBE'], 
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Rubik, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)",
    },
    itemMargin: {
      horizontal: 20,
    },
  },
  responsive: [
    {
      breakpoint: 1366,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        grid: {
          padding: {
            right: 5,
          },
        },
      },
    },
  ],
};


export const TransactionHistoryData = [
  {
    title: 'Receipt from Wallet',
    date: 'Mar 21,2024, 4:45pm',
    status: 'Completed',
    amount: '+ $248.00',
    icon: 'send',
    color: 'primary'
  },
  {
    title: 'Process refund to',
    date: 'Feb 20,2024, 2:10pm',
    status: 'Pending',
    amount: '+ $548.00',
    icon: 'work',
    color: 'secondary'
  },
  {
    title: 'Sending to Citizen',
    date: 'Jun 17,2024, 12:45pm',
    status: 'Verified',
    amount: '+ $953.00',
    icon: 'graph',
    color: 'success'
  },
  {
    title: 'Payment From #12345',
    date: 'Oct 30,2024, 1:31pm',
    status: 'Rejected',
    amount: '+ $349.00',
    icon: 'payment-bookmark',
    color: 'danger'
  },
]

export const ShiftsSummaryChart : ApexOptions = {
    labels: ["recalled", "provided", "acceptance", "new"],
    series: [60, 40, 50, 45],
    chart: {
        type: "donut",
        height: 302,
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
    colors: ["#61AE41", "#26a7d6", '#FFB70D', '#015DBE'],
    responsive: [
      {
        breakpoint: 1235,
        options: {
          chart: {
            height: 280,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 205,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: "16px",
                  },
                },
              },
            },
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

  export const ShiftsSummaryData = [
    {
      title:"New",
      color: 'primary',
      score: '70'
    },
    {
      title:"Acceptance",
      color: 'secondary',
      score: '85'
    },
    {
      title:"Provided",
      color: 'info',
      score: '150'
    },
    {
      title:"Recalled",
      color: 'success',
      score: '84'
    },
  ]

  export const DashBoardBroweserListWidget = [
    {
      score: '+50%',
      image: 'chrome.png'
    },
    {
      score: '+60%',
      image: 'explorer.png'
    },
    {
      score: '+65%',
      image: 'firefox.png'
    },
    {
      score: '+78%',
      image: "safari.png"
    },
    {
      score: '+82%',
      image: 'opera.png'
    },
   ]

export const SalesanalyticChartWidget : ApexOptions = {
      chart: {
          height: 274,
          type: 'area',
          toolbar:{
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
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov" , "Dec"],
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
        gradient:{
          opacityFrom: 0.5,
          opacityTo: 0,
          shadeIntensity: 0.2,
        },
      },
      colors:[ '#FFB70D' , '#015DBE']
}


export const ProjectCreatedChart: ApexOptions = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [220,0, 250,0 , 210, 0, 210, 0, 270, 0, 220,0 , 250,0 , 260,0 , 210,0 , 230]
},{
  name: 'TEAM B',
  type: 'area',
  data: [210,170, 240, 160, 200, 170, 200, 150, 260, 170, 210,170,240, 160, 250, 140, 200, 140,220,220]
}],
  chart: {
  height: 320,
  type: 'area',
  stacked: false,
  toolbar: {
    show: false,
  }
},
stroke: {
  width: [0, 2, 5],
  curve: 'stepline'
},
plotOptions: {
  bar: {
    columnWidth: '100%'
  }
},
colors: [ '#bebebe' , '#015DBE'],
fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },    
grid :{
  show: true,
  yaxis: {
    lines: {
      show: true,
    }
  },
},
xaxis: {
  categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun" ,"" , "July" , "" , "Aug" , "" , "Sep" , "" , "Oct" , ""],
  labels: {
    style: {
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 500,
        colors: '#8D8D8D',
    },
  },
  axisBorder: {
    show: false
  },
},
dataLabels: {
  enabled: false,
},
  yaxis: {
    labels: {
      style: {
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          colors: '#8D8D8D',
      },
    },
  },
legend:{
  show: false,
},
tooltip: {
  custom: ({ series, seriesIndex, dataPointIndex,}) => {
    return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
  },
},
};