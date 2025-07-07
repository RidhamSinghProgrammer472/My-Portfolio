import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Dev",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Discord Bot Developer & Minecraft Server Developer",
  avatar: "/images/avatar.jpg",
  email: "warlander959@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dev is a Discord server developer, bot developer & minecraft server developer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of gaming and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Funix™",
        timeframe: "2025 - Present",
        role: "Founder",
        achievements: [
          <>
            🔧 Developed and launched Funix™, a 24/7 multipurpose Discord bot with music, moderation, suggestions, and giveaways
            currently active across multiple servers with automated embed systems and private staff pipelines.
          </>,
          <>
            🎨 Designed interactive UI/UX panels including dropdown-based help menus and animated embed
            dashboards, boosting user interaction and reducing support confusion by 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MineHoody",
        timeframe: "2018 - 2022",
        role: "Founder",
        achievements: [
          <>
            🏗️ Conceptualized and initiated MineHoody, a next-gen Minecraft network aimed at combining
            immersive gameplay with community-driven geopolitics.
          </>,
          <>
            🌐 Planned scalable server infrastructure with custom VPS setup, panel integration, and modular
            nation-based systems for player-run economies and diplomacy.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Roles & Highlights",
    institutions: [
      {
        name: "Founder & Lead Developer of Funix™",
        description: <>An all-in-one 24/7 Discord bot with music, moderation, suggestions, and more.</>,
      },
      {
        name: "Owner of MineHoody",
        description: <>A future Minecraft network built for skyblock, fun games, and bedwars.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Scripting",
        description: <>Proficient in JavaScript, Python, HTML & CSS with hands-on experience in building full-stack Discord bots and responsive web interfaces.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tools & Technologies",
        description: <>Skilled in Node.js, Discord.js, MongoDB, Git, and hosting platforms like Replit, Railway, and Render for deploying and managing projects.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Talking code, design, and the occasional chaos...",
  description: `Read what ${person.name} has been cooking lately — from tech rants to dev updates.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

export { person, social, newsletter, home, about, blog, work, gallery };
