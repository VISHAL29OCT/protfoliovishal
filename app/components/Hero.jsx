export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">

      <div className="max-w-4xl space-y-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl">

        <p className="uppercase tracking-widest text-sm text-purple-300">
          Creative Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
          Hello, <br />
          I’m <span className="italic text-purple-400">Vishal</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-xl">
          I build immersive, interactive, and visually refined web experiences
          using modern frontend technologies.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
            View Work
          </button>
          <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            Contact
          </button>
        </div>

      </div>
    </section>
  );
}
