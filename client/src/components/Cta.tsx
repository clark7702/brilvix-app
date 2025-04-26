import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Cta() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="font-heading font-bold text-3xl md:text-4xl text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to transform your brand?
        </motion.h2>
        <motion.p 
          className="text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's collaborate to create media experiences that resonate with your audience and drive business growth.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="white" 
            size="lg"
            onClick={() => handleNavClick('contact')}
          >
            Get Started
          </Button>
          <Button 
            variant="outlineWhite" 
            size="lg"
            onClick={() => handleNavClick('portfolio')}
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
