import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'E-Commerce', 'Branding'];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: 'src/Assets/ecommerce.jpeg',
    description: 'Modern e-commerce platform with seamless checkout experience.',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile',
    image: 'src/Assets/Banking.jpeg',
    description: 'Secure and user-friendly mobile banking application.',
  },
  {
    title: 'Corporate Website',
    category: 'Web',
    image: 'src/Assets/Corporate.jpeg',
    description: 'Professional website for a leading corporation.',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'src/Assets/Brandidentify.png',
    description: 'Complete brand identity design and guidelines.',
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile',
    image: 'src/Assets/Food.png',
    description: 'User-friendly food delivery application.',
  },
  {
    title: 'Real Estate Platform',
    category: 'Web',
    image: 'src/Assets/Realestate.jpeg',
    description: 'Property listing and management platform.',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;