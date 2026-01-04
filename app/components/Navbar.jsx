"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between
        backdrop-blur-xl bg-white/5 border-b border-white/10">

        {/* LOGO */}
        <button
          onClick={handleLogoClick}
          className="text-xl font-bold tracking-wide gradient-text"
        >
          Vishal
        </button>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vishal-kumar-a66065241/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.727V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433c-1.14 0-2.06-.926-2.06-2.066 0-1.14.92-2.066 2.06-2.066s2.06.926 2.06 2.066c0 1.14-.92 2.066-2.06 2.066zM20.45 20.452h-3.56v-5.569c0-1.328-.03-3.036-1.85-3.036-1.85 0-2.13 1.445-2.13 2.939v5.666h-3.56V9h3.42v1.561h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.251z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VISHAL29OCT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/80 hover:fill-white">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61 
              -4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757 
              -1.089-.745.084-.729.084-.729 1.205.084 
              1.838 1.236 1.838 1.236 1.07 1.835 2.807 
              1.305 3.495.998.108-.776.417-1.305.76-1.605 
              -2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 
              1.235-3.22-.135-.303-.54-1.523.105-3.176 
              0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
              3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
              3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
              3.176.765.84 1.23 1.91 1.23 3.22 0 4.61 
              -2.805 5.625-5.475 5.92.435.375.81 1.11.81 
              2.235 0 1.615-.015 2.915-.015 3.315 0 .315.21.69.825.57 
              C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* CONTACT */}
          <button
            onClick={() => router.push("/contact")}
            className="ml-2 px-5 py-2 rounded-full bg-white text-black text-sm font-medium
            hover:scale-105 transition"
          >
            Contact 
          </button>

        </div>
      </nav>
    </header>
  );
}

