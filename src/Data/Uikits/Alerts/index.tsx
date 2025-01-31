import { AlertCircle, AlertOctagon, AlertTriangle, BarChart2, CheckSquare, Clock, HelpCircle, Layers, Loader, Octagon, ThumbsUp } from "react-feather"

export const DarkThemeSpan = [
    {
        text: 'Use',
        code: ' alert-*'
    },
    {
        text: ' class to make an alert.'
    }
]

export const DarkThemeLeftSideData = [
    {
        title: 'Primary Alert',
        color: 'primary',
    },
    {
        title: 'Secondary Alert',
        color: 'secondary',
    },
    {
        title: 'Success Alert',
        color: 'success',
    },
    {
        title: 'Info Alert',
        color: 'info',
    },
    
]

export const DarkThemeRightSideData = [
    {
        title: 'Warning Alert',
        color: 'warning',
        className: 'white'
    },
    {
        title: 'Danger Alert',
        color: 'danger',
        className: 'white'
    },
    {
        title: 'Light Alert',
        color: 'light',
        className: 'text-dark'
    },
    {
        title: 'Dark Alert',
        color: 'dark',
        className: 'white'
    },
    
]

export const LightThemeSpan = [
    {
        text: 'Use',
        code: 'alert-light-*'
    },
    {
        text: 'class to make an alert.'
    }
]

export const LightThemeLeftSideData = [
    {
        title: 'Primary Light Alert',
        color :'primary'
    },
    {
        title: 'Secondary Light Alert',
        color :'secondary'
    },
    {
        title: 'Success Light Alert',
        color :'success'
    },
    {
        title: 'Info Light Alert',
        color :'info'
    },
]


export const LightThemeRightSideData = [
    {
        title: 'Warning Light Alert',
        color :'warning',
        className: 'warning'
    },
    {
        title: 'Danger Light Alert',
        color :'danger',
        className: 'danger'
    },
    {
        title: 'White Light Alert',
        color :'light',
        className: 'dark'
    },
    {
        title: 'Dark Light Alert',
        color :'dark',
        className: 'dark'
    },
]

export const OutlineAlertSpan = [
    {
        text: 'Use',
        code: ' border-*'
    },
    {
        text: 'utility class to provide matching border and border-width within any alert',
        code: '[solid/double/inset/outset]'
    },
    {
        text: '.'
    }
]

export const IconsAndTextActionsSpan = [
    {
        text: 'Use',
        code: 'border-*'
    },
    {
        text: ' class to add dismiss text instead of icon.'
    }
]

export const LiveAlertData = [
    {
      text: "Click the button below to show an alert,then dismiss it with the built-in close button.",
    },
  ];

  export const DismissingLightAlertSpan =[
    {
        text: 'Use',
        code: 'alert-*'
    },
    {
        text: 'class can be used to generate a dark alerts and',
        code: 'alert-dismissible'
    },
    {
        text: 'utility class to remove the alerts.'
    }
  ]

  export const LeftBorderAlertSpan = [
    {
        text: 'Use',
        code: 'border-left-*'
    },
    {
        text: 'class to add left border to alert.'
    }
  ]

  export const LeftBorderAlertData = [
    {
        color: 'dark',
        title:'Dark Alert: border-left-wrapper',
        icon: <HelpCircle />
    },
    {
        color: 'secondary',
        title:'Secondary Alert: border-left-wrapper',
        icon: <AlertOctagon />
    },
    {
        color: 'success',
        title:'Success Alert: border-left-wrapper',
        icon: <CheckSquare />
    },
  ]

  export const CustomAlertPopupSpan = [
    {
        text: 'Use',
        code: ' alert '
    },
    {
        text: 'class can be used to generate a custom alert.'
    }
  ]

  export const IconsWithAlertsSpan = [
    {
        text: 'Use',
        code: ' alert  alert-* '
    },
    {
        text: 'classes to add SVG icons to the alerts.'
    }
  ]

 export const IconsWithAlertsData =[
    {
        color: 'primary',
        icon: <BarChart2 className="stroke-primary"/>
    },
    {
        color: 'secondary',
        icon: <Layers className="stroke-secondary"/>
    },
    {
        color: 'warning',
        icon: <AlertTriangle className="stroke-warning"/>
    },
     {
        color: 'success',
        icon: <CheckSquare className="stroke-success"/>
    },
 ] 

 export const IconsWithAlertsDataRight =[
    {
        color: 'danger',
        icon: <AlertCircle className="stroke-danger"/>,
        className: 'light'
    },
    {
        color: 'info',
        icon: <Octagon className="stroke-info"/>,
        className: 'light'
    },
    {
        color: 'light',
        icon: <ThumbsUp className="stroke-dark"/>,
        className: 'dark'
    },
     {
        color: 'dark',
        icon: <Loader className="stroke-dark"/>,
        className: 'light'
    },
 ] 
 
 export const AdditionalContentSpan = [
    {
        text: 'Use',
        code: 'alert'
    },
    {
        text: ' utility class to provide additional content within any alerts.'
    }
 ]
 
 export const AdditionalContentsData = [ 
    {
        color: 'primary',
        title: 'Please! Check your notifications'
    },
    {
        color: 'secondary',
        title: 'Something went wrong! Please, chrome update.'
    },
    {
        color: 'success',
        title: 'Please! Hidden cameras were not installed.'
    },
 ]