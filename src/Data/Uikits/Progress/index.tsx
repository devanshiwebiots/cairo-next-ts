import { CheckCircle, Database, Home, Star, User } from "react-feather";

export const InitialProgressBarsSpan = [
    {
      text: ' Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We use the',
      code :' progress '
    },
    {
        text: 'as a wrapper to indicate the max value of the progress bar. The ',
        code: 'progress-bar '
    },
    {
        text: 'requires an inline style, utility class, or custom CSS to set their width.'
    }
]

export const InitialProgressData = [
    {
        color: "primary",
        value: "25",
        text: "25%",
      },
      {
        color: "secondary",
        value: "50",
        text: "50%",
      },
      {
        color: "success",
        value: "75",
        text: "75%",
      },
      {
        color: "info",
        value: "100",
        text: "100%",
      },
    ];

    export const StripedProgressBarsSpan = [
        {
            text: 'Add',
            code: 'progress-bar-striped'
        },
        {
            text: ' to any',
            code: 'progress-bar '
        },
        {
            text: "to apply a stripe via CSS gradient over the progress bar's background color Using CSS Effects."
        }
    ]

 export const StripedProgressBarsData = [
    {
        value: '25',
        color: 'warning'
    },
    {
        value: '50',
        color: 'danger'
    },
    {
        value: '75',
        color: 'success'
    }
 ]
 
 export const AnimatedProgressBarsSpan = [
    {
        text: 'The striped gradient can also be animated. Add ',
        code :' progress-bar-animated'
    },
    {
        text: ' to',
        code: 'progress-bar'
    },
    {
        text: ' to animate the stripes right to left via CSS3 animations.'
    }
 ]

 export const AnimatedProgressBarsData = [
    {
        color: 'primary',
        value: '10'
    },
    {
        color: 'warning',
        value: '25'
    },
    {
        color: 'danger',
        value: '50'
    },
    {
        color: 'success',
        value: '75'
    },
 ]

 export const MultipleBarsSpan = [
    {
        text: 'Include multiple progress bars in a progress component if you need.'
    }
 ]

 export const MultipleBarsDataOne = [
    {
        color: 'primary',
        value: '30'
    },
    {
        color: 'secondary',
        value: '20'
    },
    {
        color: 'success',
        value: '15'
    }
 ]

 export const MultipleBarsDataTwo = [
    {
        color: "primary",
        value: "15",
      },
      {
        color: "secondary",
        value: "30",
      },
      {
        color: "success",
        value: "20",
      },
      {
        color: "info",
        value: "15",
      },
      {
        color: "warning",
        value: "15",
      },
      {
        color: "danger",
        value: "15",
      },
      {
        color: "primary",
        value: "15",
      },
      {
        color: "light",
        value: "15",
      },
 ]

 export const ProgressWithNumberStepsSpan = [
    {
        text: ' Use the',
        code: 'position-absolute '
    },
    {
        text: 'to set progress numbers steps.'
    }
 ]

 export const ProgressNumberList = [
    {
        color: "primary",
        number: "1",
        className: "start-0 ",
      },
    {
      color: "primary",
      number: "2",
      className: "start-50 txt-light",
    },
    {
      color: "transparent",
      number: "3",
      className: "progress-btn start-100 txt-dark",
    },
  ];

  export const CustomProgressBarsSpan = [
    {
        text: 'Use the',
        code: ' progress-bar-animated ',
    },
    {
        text: 'and',
        code: ' progress-bar-striped'
    },
    {
        text :'to animate the stripes right to left.'
    }
  ]

  export const CustomProgressBarsData  = [
    {
        title: '0% Getting Started',
        value : '0'
    },
    {
        title: '30% Getting Uploading...',
        value: '30',
        text: '30%',
        color: 'primary'
    },
    {
        title: '60% Getting Pause...',
        value: '60',
        text: '60%',
        color: 'secondary'
    },
    {
        title: '70% Getting Uploading...',
        value: '70',
        text: '70%',
        color: 'success'
    },
    {
        title: '100% Completed',
        value: '100',
        text: '100',
        color: 'dark'
    },
  ]
  
  export const SmallProgressBarsSpan = [
    {
        text: 'Use',
        code: ' sm-progress-bar'
    },
    {
        text: ' class to change progress size to small.'
    }
  ]

  export const SmallProgressBarsData =[
    {
        title: "50 MB Data",
        value: "50",
      },
      {
        title: "75 MB Data",
        value: "75",
      },
      {
        title: "90 MB Data",
        value: "90",
      },
  ]

  export const LargeProgressBarsData = [
    {
        text: 'Use',
        code: ' lg-progress-bar'
    },
    {
        text: ' class to change progress size to large.'
    }
  ]

  export const LargeProgressData = [
    {
      color: 'primary',
      value: '25',
      text: '25%'
    },
    {
      color: "secondary",
      text: "50%",
      value: "50",
    },
    {
      color: "success",
      text: "75%",
      value: "75",
    },
    {
      color: "info",
      text: "10%",
      value: "100",
    },
  ]

  export const HeightProgressData = [
    {
      text: "Set a height value on the ",
      code: ".progress-bar",
    },
    {
      text: ", so if you change that value the outer",
      code: ".progress",
    },
    {
      text: " will automatically resize accordingly.",
    },
  ];
  
  export const HeightProgressList = [
    {
      color: "warning",
      height: "5px",
      value: "50",
    },
    {
      color: "danger",
      height: "11px",
      value: "75",
    },
    {
      color: "info",
      height: "19px",
      value: "100",
    },
  ];

  export const StepProgressbarSpan = [
    {
        text: 'Use',
        code: 'step-progress-wrapper'
    },
    {
        text: ' class to make step progressbar.'
    }
  ]

  export const StepProgressbarData = [
    {
        icon: <User className="bookmark-search"/>,
        step: 'first',
        active: true,
        number: 1,
        title: 'Profile',
    },
    {
        icon: <Database className="bookmark-search"/>,
        step: 'secound',
        active: true,
        number: 2,
        title: 'Finance',
    },
    {
        icon: <Home className="bookmark-search"/>,
        step: 'third',
        active: false,
        number: 3,
        title: 'Property',
    },
    {
        icon: <Star className="bookmark-search"/>,
        step: 'fourth',
        active: false,
        number: 4,
        title: 'Review',
    },
    {
        icon: <CheckCircle className="bookmark-search"/>,
        step: 'fifth',
        active: false,
        number: 5,
        title: 'Authorization',
    },
  ]