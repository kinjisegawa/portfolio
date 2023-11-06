import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vuejs,
  csharp,
  flutter,
  python,
  java,
  sql,
  git,
  nextjs,
  threejs,
  kjsce,
  book,
  mstar,
  threader,
  shippr,
  chatSpace,
  spot,
  spot2,
  sotq,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name:
      "JustSystems",
    icon: kjsce,
    iconBg: "#383E56",
    date: "July 2018 - May 2019",
    points: [
      "Developed and maintained responsive websites using HTML, CSS, and JavaScript, resulting in a 25% increase in user engagement.",
      "Collaborated with UX designers and back-end developers to implement new features and improve website performance, resulting in a 15% increase in page load speed.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "JTB Corporation",
    icon: book,
    iconBg: "#E6DEDD",
    date: "June 2019 - July 2022",
    points: [
      "As a Full-Stack Developer, I leveraged my expertise in multiple programming languages and frameworks to create scalable web applications. By delivering efficient and user-friendly solutions, I successfully catered to the needs of clients across diverse industries.",
      "In my role as a Full-Stack Developer, I worked closely with cross-functional teams to analyze requirements, design database structures, and implement robust front-end and back-end functionalities. This collaborative approach resulted in seamless user experiences and ultimately contributed to improved business outcomes.",
    ],
  },
  {
    title: "Full-Stack CMS Developer",
    company_name: "JTEKT",
    icon: mstar,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Spearheaded the development and maintenance of custom CMS solutions, leveraging PHP, JavaScript, and MySQL to streamline content management and create intuitive user interfaces.",
      "Fostered seamless collaboration with cross-functional teams to implement cutting-edge features, optimize performance, and swiftly troubleshoot issues, resulting in elevated website functionality and an unparalleled user experience.",
    ],
  },
];

const awards = [
  {
    award: spot2,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Jun 2023",
  },
  {
    award: spot,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Feb 2022",
  },
  {
    award: sotq,
    name: "Star of the Quarter Award",
    company: "Morningstar",
    image: mstar,
    height: "1/2",
    date: "Jan 2023",
  }
];

const projects = [
  {
    name: "Threader",
    description:
      "Pioneered Threader, an innovative social media platform where users can post and interact with short messages.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent",
      },
      {
        name: "clerk",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "vercel",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: threader,
    source_code_link: "https://github.com/NirajBhavnani/Threader",
  },
  {
    name: "Shippr",
    description:
      "Developed and deployed a fully responsive Modern Full Stack E-commerce application with payments functionality.",
    tags: [
      {
        name: "WordPress platform",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: shippr,
    source_code_link: "https://github.com/NirajBhavnani/Shippr",
  },
  {
    name: "ChatSpace",
    description:
      "Built and deployed a live chatroom web application using an authentication system.",
    tags: [
      {
        name: "vueJs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatSpace,
    source_code_link: "https://github.com/NirajBhavnani/ChatSpace",
  }
];

export { services, technologies, experiences, awards, projects };
