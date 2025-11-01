// lib/data.ts

export const RESUME_LINK = 'https://drive.google.com/file/d/1sRh7UQlZOTOamTz9qfQHjzQK0yfK-qtJ/view?usp=sharing';

// --- About Me & Role ---
export const aboutMeContent = {
  role: "Software Developer | Full-Stack Enthusiast",
  summary:
    "Greetings! I'm Asmita Sagarkar, a highly motivated software developer at Tata Consultancy Services (TCS) with a strong foundation in Java, Frontend and Backend technologies. I thrive on creating engaging and user-friendly web solutions, constantly learning and evolving in the field of full-stack development. My love for problem-solving drives me to stay up-to-date with the latest industry trends and technologies. Let's build something amazing together! 🚀",
  tagline: "I build robust, scalable, and user-friendly web solutions.",
};

// --- Skills ---
export const skills = [
  { name: 'Java', level: 90, category: 'Backend' },
  { name: 'Spring Boot', level: 85, category: 'Backend' },
  { name: 'Servlets & JSP', level: 80, category: 'Backend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Express', level: 70, category: 'Backend' },
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Styling' },
  { name: 'HTML5', level: 95, category: 'Styling' },
  { name: 'CSS3', level: 90, category: 'Styling' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Mongoose', level: 75, category: 'Database' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Postman', level: 80, category: 'Tools' },
  { name: 'WSO2', level: 80, category: 'Tools' },
  { name: 'C / C++', level: 70, category: 'Fundamentals' },
  { name: 'Linux', level: 70, category: 'Tools' },

];

// Extract unique skill categories for filtering
export const skillCategories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

// --- Projects ---
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  imageUrl: string; // Use Next.js Image Component
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        shortDescription: "My personal portfolio showcasing my web development projects and skills.",
        longDescription: "A fully responsive website built to highlight my expertise in HTML, CSS, JavaScript, and modern frameworks. It serves as a central hub for all my professional work.",
        githubUrl: "https://github.com/AsmitaSagarkar/myPortfolio",
        liveUrl: "https://asmitasagarkar.github.io/myPortfolio/",
        tags: ["React", "JavaScript", "HTML5", "CSS3", "Frontend"],
        imageUrl: "/images/portfolio.gif",
    },
    {
        id: 2,
        title: "Spndo (Full-Stack)",
        shortDescription: "A personal finance management app to track expenses and budgets effectively.",
        longDescription: "Architecting a personal finance app with a Next.js/TypeScript frontend and a Spring Boot/MySQL backend. Features include secure JWT authentication, RESTful APIs for transaction management, and a component-driven UI.",
        githubUrl: "https://github.com/Waahguptaji/spndo",
        liveUrl: "https://waahguptaji.github.io/spndo/",
        tags: ["Nextjs", "Tailwind CSS", "Full-Stack", "TypeScript", "Node.js", "Express","MongoDB"],
        imageUrl: "/images/movie.gif",
    },
    {
        id: 3,
        title: "MoviePulse (React/Tailwind)",
        shortDescription: "A sleek movie discovery site featuring curated film collections.",
        longDescription: "Built with React and styled with Tailwind CSS for a responsive, modern user experience and seamless navigation across all devices.",
        githubUrl: "https://github.com/AsmitaSagarkar/Movie_Pulse",
        liveUrl: "https://asmitasagarkar.github.io/Movie_Pulse/",
        tags: ["React", "Tailwind CSS", "Frontend"],
        imageUrl: "/images/movie.gif",
    },
    {
        id: 4,
        title: "Blog Website",
        shortDescription: "A robust platform for content creation and sharing thoughts and experiences.",
        longDescription: "Built with a full-stack approach using Node.js, Express.js, EJS, and Mongoose for seamless data handling and dynamic content serving.",
        githubUrl: "https://github.com/AsmitaSagarkar/Blog_Website/tree/master",
        tags: ["Node.js", "Express", "MongoDB", "Full-Stack"],
        imageUrl: "/images/blog.gif",
    },
    {
        id: 5,
        title: "Note-Taking App (Keep Clone)",
        shortDescription: "A simple, intuitive note-taking application for quick thought capture and organization.",
        longDescription: "This project uses React and modern frontend practices to provide a seamless and highly responsive platform for creating and managing notes.",
        githubUrl: "https://github.com/AsmitaSagarkar/Keep_Notes/tree/master",
        liveUrl: "https://oejb7v.csb.app/",
        tags: ["React", "Frontend", "JavaScript"],
        imageUrl: "/images/notes.gif",
    },
    {
        id: 6,
        title: "To-Do List",
        shortDescription: "An efficient and organized way to manage tasks and boost productivity.",
        longDescription: "A full-stack application leveraging Node.js, Express, EJS, and Mongoose, allowing users to create separate lists for specific tasks, enhancing organization.",
        githubUrl: "https://github.com/AsmitaSagarkar/To_Do_List/tree/master",
        tags: ["Node.js", "MongoDB", "Full-Stack", "EJS"],
        imageUrl: "/images/todolist.gif",
    },
    
];

// Extract unique project tags for filtering
export const projectTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

// --- Contact Info ---
export const socialLinks = {
  email: "asmitasagarkar@gmail.com",
  github: "https://github.com/AsmitaSagarkar",
  linkedin: "https://www.linkedin.com/in/asmita-sagarkar-949a08201",
  twitter: "https://twitter.com/AsmitaSagarkar",
};