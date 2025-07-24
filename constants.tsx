import type { Project, Experience, Skill, Stat, PersonalInfo } from "./types";
import { TechIcons } from "./components/icons/TechIcons";

export const SKILLS_DATA: Skill[] = [
  {
    name: "Python",
    icon: <TechIcons.Python />,
    color: "#3776AB", // Official Python Blue
  },
  {
    name: "Django",
    icon: <TechIcons.Django />,
    color: "#092E20", // Official Django Green
  },
  {
    name: "FastAPI",
    icon: <TechIcons.FastAPI />,
    color: "#009688", // Official FastAPI Teal
  },
  {
    name: "NodeJS",
    icon: <TechIcons.NodeJS />,
    color: "#339933", // Official NodeJS Green
  },
  {
    name: "Mongoose",
    icon: <TechIcons.Mongoose />,
    color: "#880000", // Official Mongoose Red
  },
  {
    name: "NextJS",
    icon: <TechIcons.NextJS />,
    color: "#000000", // Official Next.js Black
  },
  {
    name: "Javascript",
    icon: <TechIcons.JS />,
    color: "#F7DF1E", // Official JavaScript Yellow
  },
  {
    name: "React",
    icon: <TechIcons.React />,
    color: "#61DAFB", // Official React Blue
  },
  {
    name: "Tailwind CSS",
    icon: <TechIcons.Tailwind />,
    color: "#06B6D4", // Official Tailwind CSS Teal
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Lite Regal Education",
    description: "A sleek, modern website for a desert-themed travel company.",
    tags: ["React", "Tailwind", "Vite"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQFxZ4OLM5q9Lw/profile-treasury-image-shrink_800_800/B56Zg83PYEHUAY-/0/1753367772578?e=1753974000&v=beta&t=5SE7eY9oqNkCKEdWHlV-IMxtRGnhWD7fAYAZChevfG8",
    techIcon: <TechIcons.Tailwind />,
    WebUrl: "https://www.literegal.co.uk/",
  },
  {
    title: "Greek House Custom",
    description:
      "An immersive landing page for a virtual reality product launch.",
    tags: ["React", "Three.js", "GSAP"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQGOa-JIbjyIBQ/profile-treasury-image-shrink_800_800/B56Zg838WyHQAY-/0/1753367958265?e=1753974000&v=beta&t=LXISjdeSMlKnuluEgnZzlP76AubE46USWmcbQUmB5-M",
    techIcon: <TechIcons.React />,
    WebUrl: "https://greekhouse.org/",
  },
  {
    title: "Exam Papers Practice",
    description: "A professional portfolio website for a construction company.",
    tags: ["Next.js", "Contentful", "GraphQL"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQGC1N0qTCWLcw/profile-treasury-image-shrink_800_800/B56Zg845s3HkAY-/0/1753368207275?e=1753974000&v=beta&t=ZnkYYv-NoX66Xtq-FNcoqPTjfYvkUYv2G6R2nLzxxvI",
    techIcon: <TechIcons.JS />,
    WebUrl: "https://www.exampaperspractice.co.uk/",
  },
  {
    title: "Shop - Online Deals & Voucher",
    description: "An elegant e-commerce store for a bespoke furniture brand.",
    tags: ["Laravel", "Blade", "Alpine.js"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQHT2aSJ3Z9glQ/profile-treasury-image-shrink_800_800/B56Zg85oz8HcAY-/0/1753368401673?e=1753974000&v=beta&t=mdYSi5ncb5B5V6yRjWyepQYdCifI6641pXbCuESwjjk",
    WebUrl: "https://www.livingsocial.co.uk/deals/shop    ",
  },
];

export const STATS_DATA: Stat[] = [
  { value: "15+", label: "Years of Experience", color: "bg-pink-500" },
  { value: "99+", label: "Completed Projects", color: "bg-purple-600" },
  { value: "140+", label: "Happy Customers", color: "bg-yellow-500" },
  { value: "74+", label: "Awards Won", color: "bg-red-500" },
];

export const PERSONAL_INFO_DATA: PersonalInfo[] = [
  { label: "First Name", value: "Murshida" },
  { label: "Last Name", value: "Khatun" },
  { label: "Age", value: "27 Years" },
  { label: "Nationality", value: "Bangladesh" },
  {
    label: "Freelance",
    value: "Available",
    color: "text-green-500",
    comment: "// I am available for new projects",
  },
  { label: "Address", value: "Bangladesh" },
  { label: "Phone", value: "+880 1812 719970" },
  { label: "Email", value: "talentdev285@gmail.com" },
  { label: "Languages", value: "English" },
];
