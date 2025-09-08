import React from "react";
import {
  ArrowUpRight,
  Code,
  Folder,
  Mail,
  User,
  Github,
  Linkedin,
  Briefcase,
} from "lucide-react";
import { TypeWriterName } from "./components/final/typewriter-text";
import { AnimatedProjectPin } from "./components/final/animated-pin";
import {
  GithubButton,
  LinkedInButton,
} from "./components/final/animated-buttons";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { WavyBackground } from "./components/ui/wavy-background";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { CardsCarousel } from "./components/final/cards-carousel";

const App = () => {
  const projects = [
    {
      title: "Aurora Engine",
      description:
        "A custom-built 3D rendering engine for interactive web experiences.",
      tags: ["React", "Three.js", "Shader"],
    },
    {
      title: "Quantum Ledger",
      description:
        "A secure, decentralized ledger system for small-scale transactions.",
      tags: ["TypeScript", "Solidity", "Web3"],
    },
    {
      title: "Cosmic Canvas",
      description:
        "An AI-powered creative tool that generates unique art from text prompts.",
      tags: ["Next.js", "Tailwind", "Python", "AI"],
    },
    {
      title: "Aero Dynamics",
      description: "Data visualization platform for real-time wind patterns.",
      tags: ["D3.js", "WebGL", "GIS"],
    },
  ];

  const navigation = [
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={16} /> },
  ];

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
      {children}
    </h2>
  );

  const FloatingNav = () => (
    <nav className="fixed inset-x-0 top-6 z-[9999] mx-auto w-fit">
      <div className="flex items-center space-x-4 rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 backdrop-blur-md">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 antialiased font-inter">
      <FloatingNav />

      {/* Hero Section */}
      <section
        id="about"
        className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(100%_100%_at_top,transparent,black)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMGgwYzI3LjYxNCAwIDUwIDIyLjM4NiA1MCA1MHYwYzAtMjcuNjE0LTIyLjM4Ni01MC01MC01MHoiIGZpbGw9IiM2YmY3YmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PC9wYXRoPjwvc3ZnPg==')] bg-[size:30px_30px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex w-full justify-center">
            <TypeWriterName className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight" />
          </div>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2 sm:px-4 text-center">
            A student at New York University's Tandon School of Engineering
            pursuing a Bachelor of Science in Computer Science with a minor in
            Cybersecurity.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://github.com/jw7914"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubButton></GithubButton>
            </a>

            <a
              href="https://www.linkedin.com/in/jason-wu-jw7914/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInButton></LinkedInButton>
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center space-x-2 rounded-full border border-purple-500 bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors duration-200 hover:bg-purple-700 hover:border-purple-400"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experience"
        className="relative py-24 md:py-36 px-4 md:px-0 max-w-6xl mx-auto flex flex-col items-center justify-center overflow-visible"
      >
        <SectionTitle className="relative z-10 text-center mt-4 mb-8">
          Experience
        </SectionTitle>
        <div className="relative z-10 w-full flex flex-col items-center">
          <ContainerScroll>
            <CardsCarousel />
          </ContainerScroll>
        </div>
      </section>

      {/* Projects Section */}
      <WavyBackground>
        <section id="projects" className="py-20 md:py-32 p-8 max-w-6xl mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-col overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gray-700 hover:bg-gray-900"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Code size={24} className="text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
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
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-400"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </WavyBackground>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 p-8 max-w-6xl mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <InfiniteMovingCards
          items={[
            {
              quote: "JavaScript",
            },
            {
              quote: "HTML",
            },
            {
              quote: "CSS",
            },
            {
              quote: "Python",
            },
          ]}
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 p-8 max-w-2xl mx-auto">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="mt-4 text-gray-400">
          Feel free to reach out to me with any inquiries or just to say hello!
        </p>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center rounded-full border border-gray-700 bg-gray-900 px-6 py-3 text-white transition-colors duration-200 hover:bg-gray-800"
          >
            <Mail size={16} className="mr-2" />
            <span>Send Message</span>
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Jason Wu. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
