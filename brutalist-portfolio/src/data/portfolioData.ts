// src/data/portfolioData.ts

// 1. Define the strict shape of a project
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; // Optional, in case a project isn't hosted
}

// 2. Export your array of projects
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Microservice",
    description: "A highly scalable checkout API with Redis caching and PostgreSQL.",
    techStack: ["Node.js", "Express", "TypeScript", "Redis"],
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Real-Time Dashboard",
    description: "WebSockets integrated dashboard tracking live system metrics.",
    techStack: ["Vue 3", "Vite", "Socket.io", "Chart.js"],
    githubUrl: "#",
    liveUrl: "www.google.com"
  },
  {
    id: 3,
    title: "Brutalist CLI Tool",
    description: "A terminal interface for automating local Docker deployments.",
    techStack: ["Go", "Docker", "Bash"],
    githubUrl: "#"
  }
];