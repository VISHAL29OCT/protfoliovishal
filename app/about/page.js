export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      
      {/* CONTENT BOX */}
      <div className="max-w-3xl w-full text-center">

        <h1 className="text-4xl font-bold mb-8">
          About Me
        </h1>

        <p className="text-gray-400 mb-4 leading-relaxed">
          I’m Vishal, a frontend developer passionate about building
          clean, responsive, and user-friendly web interfaces using
          React and Next.js.
        </p>

        <p className="text-gray-400 mb-4 leading-relaxed">
          Education:
          <br />
          Bachelor’s Degree in Information Technology  
          <br />
          Class 12 – Science Stream
        </p>

        <p className="text-gray-400 mb-10 leading-relaxed">
          I’ve built projects like Linktree Clone and URL Shortener UI,
          and I’m currently learning backend technologies to move
          toward full-stack development 🚀
        </p>

        {/* RESUME BUTTON */}
        <div className="flex justify-center">
          <a
            href="/Vishal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-purple-500
                       text-purple-400 font-semibold
                       hover:bg-purple-500 hover:text-black
                       transition duration-300"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}
