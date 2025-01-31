import { FileText, Mail, Send, Server, Settings, ShoppingCart, Truck, User, Users } from 'react-feather';


export const BookMarkData = [
  {
    icon: 'form',
    path: "/forms/form_controls/validation_form",
    title: "Forms",
    color: "primary",
  },
  {
    icon: 'user',
    path: "/users/user_profile",
    title: "Profile",
    color: "primary",
  },
  {
    icon: 'table',
    path: "/table/reactstrap_table/basic_table",
    title: "Tables",
    color: "primary",
  },
];

  export const LanguagesData = [
    {
      data: "en",
      logo: "flag-icon flag-icon-us",
      language: "English",
    },
    {
      data: "es",
      logo: "flag-icon flag-icon-is",
      language: "Spanish",
    },
    {
      data: "pt",
      logo: "flag-icon flag-icon-uy",
      language: "Portuegse",
    },
    {
      data: "fr",
      logo: "flag-icon flag-icon-nz",
      language: "French",
    },
    {
      data: "ae",
      logo: "flag-icon flag-icon-ae",
      language: "لعربية",
    },
    {
      data: "du",
      logo: "flag-icon flag-icon-de",
      language: "Deutsch",
    },
    {
      data: "cn",
      logo: "flag-icon flag-icon-cn",
      language: "简体中文",
    },
  ];
  

  export const cartDetailsList = [
    {
      title: 'Men Jacket',
      price: '1 X $ 299.00',
      quantity: 1,
      image : '02.jpg',
    },
    {
      title: 'Women Top',
      price: '2 X $ 150.00',
      quantity: 2,
      image :'06.jpg',

    }
  ];


  export const NotificationData = [
    {
      title: "Delivery processing",
      time : '6 hr',
      icon: <Truck color="primary"/>,
      color: "primary",
    },
    {
      title: "Order Complete",
      time: "3 hr",
      icon: <ShoppingCart />,
     color: "secondary",

    },
    {
      title: "Tickets Generated",
      time: "31 hr",
      icon: <FileText />,
      color: "success",

    },
    {
      title: "Delivery Complete",
      time: "45 min",
      icon: <Send />,
      color: "danger",
       
    }
  ];
  
  export const MessageData = [
    {
      title: 'Helen Walter',
      description: 'Do you want to go see movie?',
      image:'3.jpg'
    },
    {
      title: 'Jason Borne',
      description: 'Thank you for rating us.',
      image: '6.jpg'
    },
    {
      title: 'Sarah Loren',
      description: 'What`s the project report update?',
      image: '10.jpg'
    },
  ]

  export const UserProfileData = [
    {
      icon: <Users />,
      title: "Account",
      link:"chat/private_chat",
    },
    {
      icon: <Mail />,
      title: "Inbox",
      link:"app/letter_box",
    },
    {
      icon: <FileText />,
      title: "Taskboard",
      link:"app/task",
    },
    {
      icon: <Settings />,
      title: "Settings",
      link:"users/edit_profile",
    },
  ];

  export const NavLinksList = [
    {
      path: 'https://support.pixelstrap.com/',
      image: '2.png',
      name: 'Support'
    },
    {
      path: 'https://docs.pixelstrap.net/next/cairo/document/index.html',
      image: '3.png',
      name: 'Document'
    },
    {
      path: 'https://landing.pixelstrap.net/next/cairo/template/index.html',
      image: '4.png',
      name: 'Check Features'
    },
    {
      path: 'https://themeforest.net/user/pixelstrap/portfolio',
      image: '5.png',
      name: 'Buy Now'
    },
  ]