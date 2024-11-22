import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaMediumM,
  FaHackerrank,
  FaJava,
  FaAmazon,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";

import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiCodefactor,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Web Development",
    icon: AiFillCode,
  },
  {
    interest: "Coding ",
    icon: BsCodeSlash,
  },
  {
    interest: "Artificial Intelligence",
    icon: BsRobot,
  },
  {
    interest: "Automation",
    icon: BsGlobe,
  },
  {
    interest: "Software Engineering",
    icon: SiCodefactor,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
];

const cypressIcon = () => (
  <img 
    src="public/images/cypressImg.jpg" 
    alt="CYPRESS" 
    style={{ 
      width: '60px', 
      height: '60px', 
      borderRadius: '60%', 
      border: '2px solid #fff' 
    }} 
  />
);

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "AI & ML ",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
   name: "JAVA",
   icon: FaJava,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Cypress",
    icon: "cypressIcon"
  }
];

export const workData = [
  {
    company: "Amazon",
    designation: " Quality Assuarance Intern",
    duration: "January 2023 - June 2023",
    companyImg: "amazon.svg",
    description: (
      <>
        <ul>
        <li>Contributed to the Returns Team at Amazon, focusing on return creation and label generation workflows. 
        Streamlined processes and improved system reliability through innovative solutions and rigorous testing.</li>
        <li>
Automated on-call report generation using Tampermonkey scripts and Sidekick, reducing manual effort and increasing efficiency. </li>
<li>
Developed comprehensive integration test cases, ensuring robustness in scenarios with missing entities, leading to more reliable plugin builds.
</li>
<li>
Conducted regression testing on the cart system, identifying and resolving critical issues in the Merchant Console for smoother shopping experiences.
</li>
<li>
Enhanced operational efficiency by reducing mock order creation time by 75% through automation using Cypress and Python, integrating features like automated tracking ID generation and fulfillment updates.
</li>
<li>
  Integrated latency metrics into dashboards for performance optimization, contributing actionable insights for enhanced system performance.
          </li>
        </ul>
      </>
    ),
  },
 
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];

const LeetCodeIcon = () => (
  <img 
    src="public/images/leetcode_img.png" 
    alt="LeetCode" 
    style={{ 
      width: '30px', 
      height: '30px', 
      borderRadius: '50%', 
      border: '2px solid #fff' 
    }} 
  />
);

export const socialMediaLinks = [
  {
    href: "https://github.com/snehithapothina",
    icon: FaGithub,
    backgroundColor: "white.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/snehitha-pothina-987289206/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "gray.600",
  },

  {
    href: "https://www.hackerrank.com/profile/pothinasnehasai1",
    icon: FaHackerrank,
    backgroundColor: "green.600",
    hoverColor: "gray.600",
  },
  {
    href: "https://leetcode.com/u/Snehi_24/",
    icon: LeetCodeIcon,
    backgroundColor: "yellow.600",
    hoverColor: "gray.600",
  },
  {
    href: "https://medium.com/@vaheedsk36",
    icon: FaMediumM,
    backgroundColor: "blue.600",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
