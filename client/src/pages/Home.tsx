import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Update document title
    document.title = "Brilvix | Canadian Media Brand Company";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Brilvix is a growing Canadian media brand company specializing in creative solutions for modern businesses.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Brilvix is a growing Canadian media brand company specializing in creative solutions for modern businesses.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
