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
  unectologo,
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
    title: "Front End Developer",
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
    title: "Front End Developer",
    company_name: "Navro Technologies(Unecto)",
    icon: unectologo,
    iconBg: "#14122e",
    date: "Feb 2024 - Present",
    points: [
      "Lead the frontend development of Unecto, a community-building platform for university students.",
      "Developed interactive features like event scheduling, social interaction tools, and real-time campus trends, increasing user engagement by 25% within 6 months.",
      "Worked closely with product managers and backend teams to implement scalable solutions for user authentication, notifications, and real-time data updates, boosting user retention by 30%.",
      "Optimized application performance by implementing data caching, lazy loading, and efficient state management, reducing load times by 20% and improving overall app performance.",
      "Coordinated with the UX team to ensure a seamless and responsive UI/UX design, improving accessibility and user satisfaction.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Digital Salt",
    icon: digitalsalt,
    iconBg: "#000000",
    date: "Jun 2022 - Feb 2024",
    points: [
      "Developed and maintained client-side business logic for both admin panels and user-facing applications, improving product scalability and user experience.",
      "Optimized performance by implementing data caching strategies on the client-side,which reduced app latency by 15%.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created an internal component library that improved code reusability, cutting development time for new features by 20%.",
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

const projects = [
  {
    name: "Unecto",
    description: `A platform for UK university students, featuring community-building tools, event coordination, and campus trend updates. As a frontend developer, I designed and implemented a dynamic, user-friendly interface that boosted user engagement by 25% within six months.`,
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
    ],
    image: unectologo,
    source_code_link: "https://www.unecto.app/",
  },
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

export { services, technologies, experiences, projects };
