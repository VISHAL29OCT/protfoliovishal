import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Vishal Kumar | Portfolio",
  description: "Frontend Developer | React & Next.js",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white">

        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-20 animated-gradient" />
  <MouseGlow/>
        {/* Glow Blobs */}
        <div className="fixed -top-40 -left-40 w-150 h-150 bg-purple-600/40 rounded-full blur-[120px] -z-10" />
        <div className="fixed bottom-50  right-50  w-150 h-150  bg-blue-500/40 rounded-full blur-[140px] -z-10" />

        {/* Noise Overlay (premium touch) */}
        <div className="fixed inset-0 -z-10 opacity-[0.03] noise-bg" />
<Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

