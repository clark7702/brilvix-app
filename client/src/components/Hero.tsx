import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Crafting <span className="text-primary">Digital Experiences</span>{" "}
              That Define Brands
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Brilvix delivers innovative media solutions that transform how
              Canadian brands connect with their audience in the digital
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={() => handleNavClick("contact")}>
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavClick("portfolio")}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative h-80 md:h-96 lg:h-[500px] w-full mx-auto"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80"
                  alt="Creative media production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 p-2">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                  <span className="font-medium">
                    Creating the future of media
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-32">
          <p className="text-center text-gray-500 mb-10">
            Trusted by innovative companies across Canada
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <div className="h-12 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ivanho%C3%A9_Cambridge_logo.svg/2880px-Ivanho%C3%A9_Cambridge_logo.svg.png"
                  alt=""
                  className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-12 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hootsuite_logo.png"
                  alt=""
                  className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-12 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Wealthsimple_2015_logo.svg"
                  alt=""
                  className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-12 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/22/Lululemon_Athletica_logo.svg"
                  alt=""
                  className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
