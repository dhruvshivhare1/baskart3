import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: 'https://source.unsplash.com/random/100x100?portrait,1',
    content: 'Working with Baskart was a game-changer for our business. Their expertise and dedication to quality are unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    image: 'https://source.unsplash.com/random/100x100?portrait,2',
    content: 'The team at Baskart delivered beyond our expectations. Our new website has significantly improved our conversion rates.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, GrowthCo',
    image: 'https://source.unsplash.com/random/100x100?portrait,3',
    content: 'Exceptional service and outstanding results. Baskart helped us achieve our digital transformation goals.',
    rating: 5,
  },
];

const clients = [
  'https://source.unsplash.com/random/200x100?logo,1',
  'https://source.unsplash.com/random/200x100?logo,2',
  'https://source.unsplash.com/random/200x100?logo,3',
  'https://source.unsplash.com/random/200x100?logo,4',
  'https://source.unsplash.com/random/200x100?logo,5',
  'https://source.unsplash.com/random/200x100?logo,6',
];

const Clients: React.FC = () => {
  return (
    <>
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <img key={index} src={client} alt={`Client ${index + 1}`} className="mx-auto" />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Clients;