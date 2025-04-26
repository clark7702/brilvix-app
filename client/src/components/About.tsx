import { motion } from "framer-motion";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Olivia MacKenzie",
    title: "Founder & Creative Director"
  },
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Liam Tremblay",
    title: "Technical Director"
  },
  {
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Sophie Bouchard",
    title: "Head of Strategy"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Noah Singh",
    title: "Director of Client Success"
  }
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "12", label: "Industry Awards" },
  { value: "8+", label: "Years Experience" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About Brilvix</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating innovative media solutions for brands across Canada since 2015.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Brilvix was founded with a vision to transform how Canadian brands connect with their audiences through innovative media solutions. What started as a small creative studio in Toronto has grown into a full-service media company serving clients across the country.
            </p>
            <p className="text-gray-600 mb-6">
              Our team combines technical expertise with creative thinking to deliver media experiences that drive results. We believe in the power of storytelling and strategic thinking to build strong, meaningful brand connections.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-4xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Brilvix team at work" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary font-heading font-bold">Building the future of media</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.h3 
          className="font-heading font-semibold text-2xl mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="font-heading font-semibold text-lg mb-1">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
