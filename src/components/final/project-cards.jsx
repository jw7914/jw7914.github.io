import React from "react";
import { Code, ArrowUpRight } from "lucide-react"; // Adjust import if needed

// Project data
const projects = [
  {
    title: "Game Search",
    description: "A web-app allowing users to search for their favorite games.",
    tags: ["React", "Flask", "Material-UI", "Bootstrap", "Firebase"],
    link: "https://gamesearching.vercel.app",
  },
  {
    title: "Integrated Justice Records System",
    description:
      "A database course project allowing for querying of justice records.",
    tags: ["MySQL", "Flask", "HTML", "CSS", "Javascript"],
    link: "https://github.com/jw7914/jaildb",
  },
  {
    title: "Open Quantum Safe for securing Retail and E-Commerce.",
    description:
      "Cryptography application to secure and verify retail and e-commerce transactions using an open quantum safe library to implement SPHINCS+ signature algorithm.",
    tags: ["Liboqs", "cryptography", "Python"],
    link: "https://github.com/jw7914/comp_sec-assignment3",
  },
  {
    title: "ChowPal",
    description:
      "Web-app to allow diners to find socially connect with people who are interested in the same resturants.",
    tags: ["FastAPI", "React", "Firebase", "Google Places API"],
    link: "https://github.com/jw7914/ChowPal",
  },
];

// Card component
function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gray-700 hover:bg-gray-900">
      <div className="flex items-center space-x-3 mb-4">
        <Code size={24} className="text-cyan-400" />
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="mt-4 inline-flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View Project</span>
        <ArrowUpRight size={14} className="ml-1" />
      </a>
    </div>
  );
}

// Cards grid
export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
