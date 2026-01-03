"use client";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        My <span className="gradient-text italic">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Portfolio Website",
            tech: "Next.js · Tailwind",
            github: "https://github.com/VISHAL29OCT/portfolio",
          },
          {
            title: "Link Shortener",
            tech: "MongoDB · API",
            github: "https://github.com/VISHAL29OCT/link-shortener",
          },
          {
            title: "Password Manager",
            tech: "React · LocalStorage",
            github: "https://github.com/VISHAL29OCT/password-manager",
          },
          
        ].map((project, i) => (
          <div
            key={i}
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
              A modern web project focused on performance, UX, and clean design.
            </p>

            {/* ONLY THIS PART CHANGED */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-purple-300 hover:text-white transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
