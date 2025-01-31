import { TimelineEvent } from "@/Types/BonusUiType";

export const BasicTimeLineData = [
    {
      text: "Use ",
      code: "timeline-dot-*",
    },
    {
      text: "class to a square style timeline.",
    },
  ];
  
  export const BasicTimeLineDataList = [
    {
        color: "primary",
        date: "2 Feb 2023",
        time: "7:00 AM",
        title: "Conference with client",
        span: "At noon today, there will be a meeting with a UK client.",
      },
    {
      color: "secondary",
      date: "22 March 2023",
      time: "3:45 PM",
      title: "Discussion with marketing Team",
      span: "discussion with the marketing staff on the success of the most recent project",
    },
    {
      color: "success",
      date: "16 May 2023",
      time: "1:22 AM",
      title: "Invest in a new hosting plan",
      span: "today at 2 pm AM, purchase a new hosting package as agreed upon with the management team.",
    },
    {
      color: "warning",
      date: "23 Nov 2023",
      time: "6:56 AM",
      title: "Discussion with designer team",
      span: "",
    },
    {
      color: "info",
      date: "12 Dec 2023",
      time: "12:05 AM",
      title: "Discussion with new theme launch ",
      span: "discussion with the how many themes made in our portfolio.",
    },
    {
      color: "danger",
      date: "02 Jan 2024",
      time: "6:56 AM",
      title: "Purchase new chairs for office ",
      span: "online purchase new chairs for office ",
    },
  ];

  export const HoveringTimeLineData = [
    {
      text: "Use",
      code: "square-timeline",
    },
    {
      text: " main class to create new variations of the timeline.",
    },
  ];

  export const MeetupHoveringList = [
    {
      image: "avtar/4.jpg",
      name: "Lillian J. Goodfellow",
      number: "239-664-7751",
    },
    {
      image: "avtar/7.jpg",
      name: "Carolyn A. Sutton",
      number: "218-793-6609",
    },
  ];

  export const VariationTimeLineData = [
    {
      text: "Use  ",
      code: "activity-dot-* ",
    },
    {
      text: "class to create rounded animations on the timeline.",
    },
  ];

  export const VariationTimeLineDataList = [
    {
      className: "pb-0",
      color: "primary",
      date: "8th March, 2023",
      time: "1 day ago",
      title: "Updated Product",
      subTitle: "Key milestones throughout history...",
    },
    {
      color: "warning",
      date: "5th Feb, 2023",
      time: "Today",
      title: "Added Bew Items",
      subTitle: "Timeline showcasing historical events...",
      subTitleClass: "f-light",
      image: ["dashboard-2/product/12.png", "dashboard-2/product/13.png", "dashboard-2/product/14.png"],
    },
    {
      className: "pb-0",
      color: "secondary",
      date: "20th Sep, 2023",
      time: "12:00 PM",
      title: "Tello just like your product",
      subTitle: "Explore a chronological journey throug...",
      subTitleColor: 'text-dark'
    },
  ];

  export const HorizontalTimeLineData = [
    {
      text: "Use ",
      code: "event-list",
    },
    {
      text: " and",
      code: 'events'
    },
    {
      text: ' classes to create a new horizontal timeline.'
    }
  ];
  
  export const HorizontalTimeLineDataList = [
    {
      mainClass: "timeline-border",
      child: [
        {
          colClass: "col-sm-6",
          color: "secondary",
          date: "1 Jan",
          header: "Conference",
          paragraph: "Conferences are intended to bring individuals with similar interests together to discuss problems.",
          verticalLine1: "vertical-line",
        },
        {
          colClass: "col-sm-6",
          color: "primary",
          date: "4 Feb",
          header: "Meet-up",
          paragraph: "You may connect with males from all around the world using the friend-forward.",
          verticalLine1: "vertical-line",
        },
        {
          colClass: "horizontal-timeline",
          color: "secondary",
          date: "22 March",
          header: "Meeting",
          paragraph: "If several languages coalesce the grammar of the resulting simple and regular social networking platform.",
          verticalLine1: "vertical-line",
        },
      ],
    },
    {
      mainClass: "border-0",
      child: [
        {
          colClass: "col-sm-6",
          verticalLine2: "vertical-line",
          color: "primary",
          date: "1 Jan",
          header: "Conference",
          paragraph: "A gathering of two or more people to talk about issues of interest.",
        },
        {
          colClass: "col-sm-6",
          verticalLine2: "vertical-line",
          color: "secondary",
          date: "22 March",
          header: "Meeting",
          paragraph: "If several languages coalesce the grammar of the resulting simple and regular social networking platform.",
        },
        {
          colClass: "horizontal-timeline",
          verticalLine2: "vertical-line",
          color: "primary",
          date: "7 Dec",
          header: "Launch Theme",
          paragraph: "Responsive Website is the approach that suggests website design and development should respond.",
        },
      ],
    },
  ];

  export const AnimatedTimelineData = [
    {
      text: 'Use',
      code: 'animated-timeline'
    },
    {
      text: 'class to your animated timeline.'
    }
  ]

  export const timelineData = [
    {
      year: 2024,
      events: [
        {
          title: "Project Cairo",
          description: "The goal of this January initiative was to enhance the online theme experience for customers.",
        },
        {
          title: "Development",
          description: "Marked the beginning of the development phase.",
        },
        {
          title: "Launch Theme",
          description: "Official launch and ongoing quality control checks.",
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          title: "Viho Goal",
          description: "Project viho was introduced in May with the goal of improving tools for internal communication.",
        },
        {
          title: "Planning",
          description: "Creating a team and planning the project.",
        },
        {
          title: "Training",
          description: "Training sessions and rollout to all workers.",
        },
      ],
    },
    {
      year: 2022,
      events: [
        {
          title: "Goal",
          description: "The goal of project tivo, which was introduced in January, is to improve consumer interaction through a mobile app.",
        },
        {
          title: "Project Launch",
          description: "Market study and project launch in January.",
        },
        {
          title: "Official App",
          description: "Marketing campaign and official app launch.",
        },
      ],
    },
    {
      year: 2021,
      events: [
        {
          title: "Project Zeta",
          description: "Dedicated to improving cybersecurity, it was launched in August.",
        },
        {
          title: "Vulnerability Analysis",
          description: "Vulnerability analysis and security audit and the application of improved security protocols.",
        },
        {
          title: "Program",
          description: "Programmes for employees and ongoing observation.",
        },
      ],
    },
  ];

  export const HalfRoundedTimelineData = [
    {
      text: 'Use',
      code: 'rounded-timeline'
    },
    {
      text: 'class to your rounded timeline.'
    }
  ]

  export const timelineList: TimelineEvent[] = [
    {
      date: '15 Dec',
      icon: 'fa fa-home',
      badge: 'app-ideas',
      badgeClass: 'bg-danger',
      title: 'Established new the app-ideas repository.',
      description: 'developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.',
      position: 'left'
    },
    {
      date: '22 Oct',
      icon: 'fa fa-code-fork',
      badge: 'Blog',
      badgeClass: 'bg-warning',
      title: 'Implemented the program for weekly code challenges.',
      description: 'You can improve your understanding of programming and problem-solving techniques by taking on challenges.',
      position: 'right'
    },
    {
      date: '10 Jul',
      icon: 'fa fa-tencent-weibo',
      badge: 'Designer',
      badgeClass: 'bg-primary',
      title: 'Research about most recent design trends.',
      description: 'With our extensive analysis of the most recent design trends, discover the cutting edge of web aesthetics.',
      position: 'left'
    },
    {
      date: '18 May',
      icon: 'fa fa-modx',
      badge: 'Latest',
      badgeClass: 'bg-success',
      title: 'Freelance UX designer',
      description: 'Our professionals improve the usability and engagement of your website by creating user-friendly interfaces and user-centered designs, resulting in an unmatched online experience.',
      position: 'right'
    },
    {
      date: '10 Feb',
      icon: 'fa fa-file-audio-o',
      badge: 'Audio testing',
      badgeClass: 'bg-primary',
      title: 'Musical trends and predictability',
      description: "So, the next time you listen to music, you might or might not consider how it's actively altering your mood.",
      audioSrc: '../assets/audio/horse.ogg',
      position: 'left'
    },
    {
      date: '01 Jan',
      icon: 'fa fa-group',
      badge: 'Meet-up',
      badgeClass: 'bg-success',
      title: "Web-designer's meet-up",
      description: 'Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools.',
      position: 'right'
    }
  ];