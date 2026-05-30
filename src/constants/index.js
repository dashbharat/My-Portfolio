import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  growserve,
  starbucks,
  tesla,
  milprosys,
  quickshow,
  ECommerce,
  cgenerator,
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
    title: "Frontend Developer",
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
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Milprosys Private Limited",
    icon: milprosys,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2023",
    points: [
      "– Developed responsive and cross-browser compatible web pages using HTML5, CSS3, and JavaScript",
"– Built React.js components using Hooks for dynamic UI rendering",
"– Implemented responsive layouts using Bootstrap and Tailwind CSS",
"– Integrated REST APIs to fetch and display dynamic data",
"– Fixed UI bugs and improved application performance and usability",
"– Used Git for version control and team collaboration",
"Internship Project: Task Management Web App",
"– Developed task management application with CRUD functionality using React.js",
"– Built reusable UI components and responsive layouts",
"– Integrated REST APIs for real-time task update",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Growserve E-Solutions PVT LTD",
    icon: growserve,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Project: Multi-Vendor E-commerce Admin Dashboard",
"Client: Reliance Retail (JioMart)",
"Description",
"– Developed a scalable admin dashboard to manage products, orders, and vendors, improving operational efficiency and user experience.",
"Responsibilities & Achievements",
"– Developed reusable and responsive UI components using React.js, Hooks, and TypeScript, improving development efficiency by 30%.",
"– Managed complex application state using Redux with TypeScript, ensuring predictable and maintainable data flow.",
"– Integrated REST APIs and collaborated with backend services built using Node.js and Express.js for product, order,and user workflows",
"– Built advanced features like search, filtering, and pagination for large datasets with efficient data handling from MongoDB",
"– Designed responsive and cross-browser compatible UI using Tailwind CSS and Bootstrap",
"– Optimized performance by minimizing re-renders and improving load time by 25% in TypeScript-based applications.",
"– Assisted in backend integration and deployment processes, with exposure to AWS services for application hosting",
"– Collaborated in Agile teams using Git, improving development and deployment cycles"

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
    name: "Book My Show",
    description:
      "Web-based platform that allows users to browse movies, check show timings, select seats, and book tickets from various cinemas, providing a convenient and seamless solution for entertainment and event ticketing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quickshow,
    source_code_link: "https://boo-k-my-ticket-m7xl.vercel.app",
  },
  {
    name: "E-Commerce",
    description:
      "Web-based platform that allows users to browse products, compare items, add products to cart, and complete secure online purchases from various sellers, providing a convenient and seamless solution for shopping needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ECommerce,
    source_code_link: "https://shopzy-bharat.vercel.app",
  },
  {
    name: "AI Component Generator",
    description:
      "Web-based platform that allows users to generate reusable UI components using artificial intelligence, customization, and integration of modern frontend elements, providing a convenient and efficient solution for web development needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cgenerator,
    source_code_link: "https://ai-component-generator-rust.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
