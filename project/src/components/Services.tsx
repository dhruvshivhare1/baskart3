import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  BarChart, 
  Search, 
  Code,
  Layers,
  Zap
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="group p-6 bg-white/5 rounded-xl backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
    >
      <div className="relative w-12 h-12 mb-6">
        <div className="absolute inset-0 bg-purple-500/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce',
      description: 'Scalable online stores with secure payment integration.',
    },
    {
      icon: BarChart,
      title: 'Advance Shopify Themes',
      description: 'Impress Your cCustomers Advance And Modern Shopify Themes.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and online visibility.',
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions for your business needs.',
    },
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that convert.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization for speed and efficiency across platforms.',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;