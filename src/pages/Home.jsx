import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickBookingBar from "../components/QuickBookingBar";
import About from "../components/About";
import Services from "../components/Services";
import FleetShowcase from "../components/FleetShowcase";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import { ScrollTrigger } from "../animations/gsapConfig";

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger when DOM and images are settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#111C30] via-[#162744] to-[#0E1728] text-slate-100 min-h-screen overflow-x-hidden w-full">
      <Navbar />

      <main className="w-full">
        <Hero />
        <QuickBookingBar />
        <About />
        <Services />
        <FleetShowcase />
        <Gallery />
        <ContactSection />
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
}
