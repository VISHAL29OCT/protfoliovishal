"use client";
import Link from "next/link";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter()
  return (
    <main className="pt-32 space-y-32">

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex items-center px-6 md:px-20">
        <div className="max-w-4xl space-y-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl animate-float">

          <p className="uppercase tracking-widest text-sm text-purple-300">
            Creative Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Hello, <br />
            I’m <span className="gradient-text italic">Vishal</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            I design and develop visually rich, animated, and interactive web
            experiences using modern frontend tools.
          </p>

          <div className="flex gap-4 pt-4">
            <button onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-7 py-3 rounded-full bg-white text-black font-medium
  transition hover:scale-110 hover:-translate-y-1"
            >
              View Projects
            </button>

              <button
        onClick={() => router.push("/about")}
        className="text-xl font-bold tracking-wide gradient-text"
      >
        About Me
      </button>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      <Skills />
    </main>
  );
}
