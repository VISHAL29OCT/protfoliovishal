"use client";

const projects = [
  {
    id: "zenze-charge",
    title: "Zenze Charge Website",
    tech: "HTML · CSS · JavaScript",
    github: "https://github.com/VISHAL29OCT/zenze-charge-website",
    desc: "Landing page website built for Zenze Charge with responsive layout and modern UI.",
  },
  {
    id: "link-shortener",
    title: "Link Shortener",
    tech: "MongoDB · API",
    github: "https://github.com/VISHAL29OCT/linkshortner",
    live: "linkshortner-ow7xxrpw0-vishal29octs-projects.vercel.app",
    desc: "A modern web project focused on performance, UX, and clean design.",
  },
  {
  id: "linktreedub",
  title: "Linktree Clone",
  tech: "Next.js · Tailwind CSS",
  github: "https://github.com/VISHAL29OCT/linktreedub",
  desc: "A Linktree-style link-in-bio application built with Next.js and Tailwind CSS.",
},
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        My <span className="gradient-text italic">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6
            backdrop-blur-xl transition-all duration-300
            hover:-translate-y-3 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400">
              {project.tech}
            </p>

            <p className="mt-4 text-gray-300 text-sm">
              {project.desc}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-purple-300 hover:text-white transition"
            >
              View Project →
            </a>
            <a href={project.live}
            target="_blank"
         className="inline-block mt-6 ml-3 text-sm text-purple-300 hover:text-white transition cursor-pointer">
              Live Demo →
              </a>
          </div>
        ))}
      </div>
    </section>
  );
}
