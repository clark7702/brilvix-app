import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        
        if (sectionTop <= 100 && sectionTop > -sectionHeight + 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center blur-bg bg-light/90">
        <a href="#" className="flex items-center">
          <span className="text-primary font-heading font-bold text-2xl tracking-tight">BRILVIX</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}
            className={`nav-link text-foreground font-medium hover:text-primary transition-colors ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('services'); }}
            className={`nav-link text-foreground font-medium hover:text-primary transition-colors ${activeSection === 'services' ? 'active' : ''}`}
          >
            Services
          </a>
          <a 
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('portfolio'); }}
            className={`nav-link text-foreground font-medium hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'active' : ''}`}
          >
            Work
          </a>
          <a 
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
            className={`nav-link text-foreground font-medium hover:text-primary transition-colors ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
            className={`nav-link text-foreground font-medium hover:text-primary transition-colors ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </div>
        
        <Button 
          className="hidden md:block"
          onClick={() => handleNavLinkClick('contact')}
        >
          Get Started
        </Button>
        
        <button className="md:hidden text-foreground" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white w-full absolute top-full left-0 shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}
            className="text-foreground font-medium hover:text-primary transition-colors py-2"
          >
            Home
          </a>
          <a 
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('services'); }}
            className="text-foreground font-medium hover:text-primary transition-colors py-2"
          >
            Services
          </a>
          <a 
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('portfolio'); }}
            className="text-foreground font-medium hover:text-primary transition-colors py-2"
          >
            Work
          </a>
          <a 
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
            className="text-foreground font-medium hover:text-primary transition-colors py-2"
          >
            About
          </a>
          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
            className="text-foreground font-medium hover:text-primary transition-colors py-2"
          >
            Contact
          </a>
          <Button
            onClick={() => handleNavLinkClick('contact')}
            className="w-full"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
