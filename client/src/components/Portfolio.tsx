import { motion } from "framer-motion";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "National Tourism Campaign",
    description: "Comprehensive media strategy for promoting Canadian tourism"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Tech Startup Rebrand",
    description: "Complete brand identity refresh for growing SaaS company"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Retail Product Launch",
    description: "Integrated marketing campaign for flagship product release"
  },
  {
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Video Series",
    description: "Documentary-style videos showcasing company culture and values"
  },
  {
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Website",
    description: "Custom online shopping experience for fashion retailer"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Social Media Strategy",
    description: "Engagement-focused content plan for restaurant chain"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest projects and see how we've helped brands transform their digital presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="portfolio-item relative rounded-xl overflow-hidden group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="portfolio-overlay absolute inset-0 bg-primary/80 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 p-6">
                <h3 className="font-heading font-semibold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-center mb-4">{item.description}</p>
                <a href="#" className="inline-flex items-center text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            className="inline-flex items-center text-primary border-2 border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
