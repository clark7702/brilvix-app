import { 
  Film, 
  LayoutGrid, 
  LineChart, 
  Smartphone, 
  Camera, 
  Megaphone, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Film className="text-primary text-2xl" />,
    title: "Video Production",
    description: "High-quality video content creation for commercials, social media, and corporate communications.",
  },
  {
    icon: <LayoutGrid className="text-primary text-2xl" />,
    title: "Brand Identity",
    description: "Comprehensive brand development including logos, style guides, and visual identity systems.",
  },
  {
    icon: <LineChart className="text-primary text-2xl" />,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that drive engagement and conversion across multiple platforms.",
  },
  {
    icon: <Smartphone className="text-primary text-2xl" />,
    title: "Web Development",
    description: "Custom website and application development with intuitive user experiences and modern designs.",
  },
  {
    icon: <Camera className="text-primary text-2xl" />,
    title: "Photography",
    description: "Professional photography services for products, corporate events, and promotional materials.",
  },
  {
    icon: <Megaphone className="text-primary text-2xl" />,
    title: "Social Media Management",
    description: "Comprehensive social media strategy, content creation, and community management.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive media solutions tailored to elevate your brand's presence and impact in the digital world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
