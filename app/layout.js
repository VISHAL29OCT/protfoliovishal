import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";

export const metadata = {
  title: "Vishal Kumar | Portfolio",
  description: "Frontend Developer | React & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">

        {/* Background effects */}
        <div className="fixed inset-0 -z-20 animated-gradient" />
        <div className="fixed -top-32 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-[120px] -z-10" />
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/40 rounded-full blur-[140px] -z-10" />
        <div className="fixed inset-0 -z-10 opacity-[0.03] noise-bg" />

        {/* Interactive glow */}
        <MouseGlow />

        {/* Layout */}
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}


