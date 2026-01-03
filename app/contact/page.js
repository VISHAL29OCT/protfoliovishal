export default function ContactPage() {
  return (
    <main className="pt-32 px-6 md:px-20 min-h-screen">
      <div className="max-w-xl">

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Contact <span className="gradient-text italic">Me</span>
        </h1>

        <p className="text-gray-300 mb-10">
          Have a project, idea, or opportunity?  
          Feel free to reach out.
        </p>

        <div className="flex flex-col gap-6">

          {/* Email */}
          <a
            href="mailto:your-email@gmail.com"
            className="rounded-xl border border-white/10 bg-white/5 p-5
            backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
          >
            📧 vishalbtech2it@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vishal-kumar-a66065241/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-5
            backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
          >
            💼 LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VISHAL29OCT"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-5
            backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
          >
            🧑‍💻 GitHub
          </a>

        </div>
      </div>
    </main>
  );
}
