import { Bell, CheckSquare, ChevronDown, MessageCircle } from "react-feather";

export const AccordionData = [
    {
      text: "Click the accordions below to expand/collapse the accordion content. Use the ",
      code: "accordion",
    },
  ];


  export const AccordionDataList = [
    {
      id: "1",
      accordionHeaderClass: "bg-light-primary",
      accordionHeading: "What do web designers do?",
      spanClass: "txt-primary",
      icon: true,
      bodyContent: (
        <p>
          Web design <em className="txt-danger">identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
        </p>
      )
    },
    {
      id: "2",
      accordionHeaderClass: "bg-light-primary",
      accordionHeading: "What is the use of web design?",
      spanClass: "txt-primary",
      icon: true,
      bodyContent: (
        <div>
          <p className="mb-3">
            <strong>Search engine optimization:</strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it.
          </p>
          <p className="mb-3">
            <strong>Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease.
          </p>
          <p>
            <strong>Improved sales:</strong> Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.
          </p>
        </div>
      )
    },
    {
      id: "3",
      accordionHeaderClass: "bg-light-primary",
      accordionHeading: "What are the elements of web design?",
      spanClass: "txt-primary",
      icon: true,
      bodyContent: (
        <div>
          <p>
            The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:
          </p>
          <ul className="d-flex flex-column gap-2 accordions-content">
            <li>Layout</li>
            <li>Images</li>
            <li>Visual hierarchy</li>
            <li>Color scheme</li>
            <li>Typography</li>
            <li>Navigation</li>
            <li>Readability</li>
            <li>Content</li>
          </ul>
        </div>
      )
    }
  ];
  

  export const FlushAccordionSpan = [
    {
      text: 'Add',
      code: 'accordion-flush'
    },
    {
      text: 'to remove the default',
      code: 'background-color'
    },
    {
      text: ', some borders, and some rounded corners to render accordions edge-to-edge with their parent container.'
    }
  ]
  
 export const FlushAccordionData = [
    {
      id: "1",
      accordionItemClass: "accordion-item",
      accordionHeaderClass: "bg-light-success",
      accordionHeading: "What is Bootstrap?",
      spanClass: "txt-success ",
      bodyContent: (
        <ul className="d-flex flex-column gap-1 accordions-content">
          <li>--&gt; Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.</li>
          <li>--&gt; It is absolutely free to download and use.</li>
        </ul>
      ),
      icon: true,
    },
    {
      id: "2",
      accordionItemClass: "accordion-item",
      accordionHeaderClass: "bg-light-success",
      accordionHeading: "Why Should You Use Bootstrap?",
      spanClass: "txt-success ",
      bodyContent: (
        <ul className="d-flex flex-column gap-2 accordions-content">
          <li>First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started.</li>
          <li>One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them.</li>
          <li>You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access.</li>
          <li>To increase the sites page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects.</li>
        </ul>
      ),
      icon: true,
    },
    {
      id: "3",
      accordionItemClass: "accordion-item",
      accordionHeaderClass: "bg-light-success",
      accordionHeading: "Bootstrap Image System",
      spanClass: "txt-success",
      bodyContent: (
        <ul className="d-flex flex-column gap-2 accordions-content">
          <li>Bootstrap handles the image display and responsiveness with its predefined HTML and CSS rules.</li>
          <li>Adding the .img-responsive class will automatically resize images based on the users screen size. This will benefit your website’s performance, as reducing image sizes is part of the site optimization process.</li>
          <li>Bootstrap also provides additional classes like .img-circle and .img-rounded, which help to modify the images shape.</li>
        </ul>
      ),
      icon: true,
    },
  ];

  export const MultipleCollapseAccordionSpan = [
    {
      text: 'A',
      code: '<button>'
    },
    {
      text: ' or',
      code: '<a>'
    },
    {
      text: 'can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute.'
    }
  ]
  
  export const WithIconsAccordionSpan = [
    {
      text:"Use the",
      code: 'accordion'
    },
    {
      text: '&',
      code: 'feather icons'
    },
    {
      text: 'through change look icons accordion.'
    }
  ]


export const WithIconsAccordionData = [
  {
    id: "1",
    accordionItemClass: "accordion-item",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-secondary",
    accordionHeading: "Keep in touch",
    iconWithTitle:  <Bell className="svg-wrapper me-2 txt-secondary"/>,
    icon: <i className="svg-color" data-feather="chevron-down"></i>,
    bodyContent: (
      <p>
        <em className="txt-danger">
          This page might not behave as expected because Windows Internet Explorer isnt configured to load unsigned ActiveX controls.
        </em>
        or
        Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer.
        (Both phrased as conditions that may cause future problems.)
      </p>
    ),
  },
  {
    id: "2",
    accordionItemClass: "accordion-item",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-secondary",
    accordionHeading: "Chats with others",
    iconWithTitle: <MessageCircle className="svg-wrapper me-2 txt-secondary"/>,
    icon: <i className="svg-color" data-feather="chevron-down"></i>,
    bodyContent: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>You get the same features in Chat and Chat in Gmail...</li>
        <li>
          <strong>Chat:</strong> Use when you prefer a dedicated chat experience...
        </li>
      </ul>
    ),
  },
  {
    id: "3",
    accordionItemClass: "accordion-item",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-secondary",
    accordionHeading: "Right way to code",
    iconWithTitle: <CheckSquare className="svg-wrapper me-2 txt-secondary"/>,
    icon: <i className="svg-color" data-feather="chevron-down"></i>,
    bodyContent: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>1) Decide on the indentation and keep it that way.</li>
        <li>2) Make comments.</li>
        <li>3) Consistent name scheme.</li>
        <li>4) Dont repeat code.</li>
        <li>5) Avoid writing long code lines.</li>
        <li>6) Break down a big task into smaller chunks.</li>
        <li>7) Organize your program into smaller files.</li>
        <li>8) Write clever code that is also readable.</li>
      </ul>
    ),
  },
];

export const OutlineAccordionSpan = [
  {
    text: ' make custom ',
    code: 'accordion-wrapper'
  },
  {
    text: 'class use to bring border-left side.'
  }
]

export const OutlineAccordionData = [
  {
    id: "1",
    accordionItemClass: "accordion-item accordion-wrapper",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-primary",
    accordionHeading: "What do web designers do?",
    icon: <ChevronDown className="svg-color" />,
    bodyContent: (
      <p>
        Web design<em className="txt-danger"> identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
      </p>
    ),
  },
  {
    id: "2",
    accordionItemClass: "accordion-item accordion-wrapper",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-primary",
    accordionHeading: "What is the use of web design?",
    icon: <ChevronDown className="svg-color" />,
    bodyContent: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li><strong> Search engine optimization: </strong>Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it.</li>
        <li><strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease.</li>
        <li> <strong> Improved sales:</strong>Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.</li>
      </ul>
    ),
  },
  {
    id: "3",
    accordionItemClass: "accordion-item accordion-wrapper",
    accordionHeaderClass: "accordion-header",
    spanClass: "txt-primary",
    accordionHeading: "What are the elements of web design?",
    icon: <ChevronDown className="svg-color" />,
    bodyContent: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li> The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:</li>
        <li>--&gt; Layout</li>
        <li>--&gt; Images</li>
        <li>--&gt; Visual hierarchy</li>
        <li>--&gt; Color scheme</li>
        <li>--&gt; Typography</li>
        <li>--&gt; Navigation</li>
        <li>--&gt; Readability</li>
        <li>--&gt; Content</li>
      </ul>
    ),
  },
];

export const HorizontalAccordionSpan = [
  {
    text: 'Add the',
    code: 'collapse-horizontal'
  },
  {
    text: 'modifier class to transition the width instead of height and set a width on the immediate child element.'
  }
]

export const AccordionCollapSpan = [
  {
    text: "you can also use a link with the href attribute",
    code: "(and a role='button').",
  },
  {
    text: "In both cases, the ",
    code: "data-bs-toggle='collapse'",
  },
  {
    text: "is required.",
  },
];