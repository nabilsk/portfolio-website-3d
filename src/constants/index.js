import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  digitalsalt,
  digiinterface,
  skygoal,
  hedgedImage,
  mahindraLifespacesImage,
  placeholderImage,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Digital Salt",
    icon: digitalsalt,
    iconBg: "#000000",
    date: "Jun 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Digiinterface Pvt Ltd",
    icon: digiinterface,
    iconBg: "#fff",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Collaborate with UX team and management for technical problems.",
      "Implement and maintain client-side validation and error handling.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Understand client's requirement and come up with programming solution for the same.",
      "Basic deployment of application on play store and apple store.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "SkyGoal® Inc",
    icon: skygoal,
    iconBg: "#fff",
    date: "Apr 2021 - Dec 2021",
    points: [
      " Develop UI as per Figma.",
      "Create reusable component in React Native.",
      "Come up with solutions to improve application performance.",
      "Rewrite existing code with latest features and optimised way.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hedged",
    description: `Users who don't have enough knowledge of trading can use the Hedged app to get started with trading and analyse their portfolio while getting access to a wide range of personalised trade advice, news, observation charts, and much more.`,
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "next js",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
    ],
    image: hedgedImage,
    source_code_link: "https://hedged.in",
  },
  {
    name: "Mahindra Lifespaces",
    description:
      "Mahindra Lifespaces mobile app streamlined the process of onboarding and managing users who bought property from Mahindra. With the help of the application, customers can do documentation and payment processes in the comfort of their homes.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "rtk query",
        color: "pink-text-gradient",
      },
      {
        name: "styled components",
        color: "blue-text-gradient",
      },
    ],
    image: mahindraLifespacesImage,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mlife.app&hl=en&gl=US",
  },
  {
    name: "AIR",
    description:
      "A platform where user get access to wide range of detailed graphs and charts for stock market observation. It has multiple subscription plan and depending on that user can access basic and premium realtime observation graphs and charts.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
    ],
    image: placeholderImage,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
