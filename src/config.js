// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Import SVG images
import MdiFire from "./images/mdi-fire.svg";
import MdiCarOutline from "./images/mdi-car-outline.svg";
import MaterialSymbolsLockOutline from "./images/material-symbols-lock-outline.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Richard-Woessner";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
    "I’m Richard Woessner III, a dedicated software developer with over three years in full-stack development, automation, and AI-driven solutions. With a B.S. in IT from the University of Cincinnati, I currently serve as a Software Developer II at Western and Southern Financial Group, where I design software solutions to streamline operations and enhance productivity. Previously, at Seven Hills Technology, I developed custom software solutions and optimized backend frameworks to improve user experiences and data workflows.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/

export const skillData = [
    {
        id: 1,
        skill: <Icon icon="mdi:language-csharp" className="display-4" />,
        name: "C#",
    },
    {
        id: 2,
        skill: <Icon icon="mdi:dot-net" className="display-4" />,
        name: ".NET",
    },
    {
        id: 3,
        skill: <Icon icon="mdi:react" className="display-4" />,
        name: "React",
    },
    {
        id: 4,
        skill: <Icon icon="mdi:angular" className="display-4" />,
        name: "Angular",
    },
    {
        id: 5,
        skill: <Icon icon="mdi:nodejs" className="display-4" />,
        name: "Node.js",
    },
    {
        id: 6,
        skill: <Icon icon="simple-icons:mysql" className="display-4" />,
        name: "SQL",
    },
    {
        id: 7,
        skill: <Icon icon="mdi:azure" className="display-4" />,
        name: "Azure",
    },
    {
        id: 9,
        skill: <Icon icon="mdi:git" className="display-4" />,
        name: "Git",
    },
    {
        id: 10,
        skill: <Icon icon="mdi:github" className="display-4" />,
        name: "GitHub",
    },
    {
        id: 11,
        skill: <Icon icon="mdi:docker" className="display-4" />,
        name: "Docker",
    },
    {
        id: 12,
        skill: <Icon icon="mdi:linux" className="display-4" />,
        name: "Linux",
    },
    {
        id: 13,
        skill: <Icon icon="devicon-plain:typescript" className="display-4" />,
        name: "TypeScript",
    },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
    "https://raw.githubusercontent.com/Richard-Woessner/Resume/main/Woessner%20Resume%2024-11-05.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
    {
        id: 1,
        name: "HVAC Data and Automation Software",
        description: "Full Stack",
        additionalInfo:
            "Developed interactive dashboards using Azure-integrated queries and Kendo UI components to support faster data access and user analytics. Developed inventory and query modules that improved data accuracy and response times in customer inquiries by optimizing .NET and SQL data structuring.",
        technologies: "Azure, React, Kendo UI, .NET 6, ElasticSearch",
        image: MdiFire, // Use the imported SVG
        html_url:
            "https://github.com/YourUsername/HVAC-Data-and-Automation-Software",
        homepage: "https://your-live-demo-url.com",
    },
    {
        id: 2,
        name: "Real Estate Lock Management Software",
        description: "Full Stack",
        additionalInfo:
            "Created features for an internal web app, took data and turned it into a readable, mutable report. Features: Client-side table filtering, paging, and sorting, including a mobile-friendly UI.",
        technologies: "Angular, Node, MySQL",
        image: MaterialSymbolsLockOutline, // Use the imported SVG
        html_url:
            "https://github.com/YourUsername/Real-Estate-Lock-Management-Software",
        homepage: "https://your-live-demo-url.com",
    },
    {
        id: 3,
        name: "Vehicle Assessment Software",
        description: "Frontend",
        additionalInfo:
            "Created an interactive web component for vehicle assessment, allowing dealerships to input details and receive guided value estimates, enhancing user engagement and accuracy. Implemented UX-enhancing features with interactive GUI, reducing data entry errors.",
        technologies: "Ajax, Bootstrap, .NET Razor",
        image: MdiCarOutline, // Use the imported SVG
        html_url: "https://github.com/YourUsername/Vehicle-Assessment-Software",
        homepage: "https://your-live-demo-url.com",
    },
];

// Replace the default GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
    {
        name: "HVAC Data and Automation Software",
        image: MdiFire,
    },
    {
        name: "Real Estate Lock Management Software",
        image: MaterialSymbolsLockOutline,
    },
    {
        name: "Vehicle Assessment Software",
        image: MdiCarOutline,
    },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
