import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

// Sample plans data
const plans = [
  {
    name: 'Starter',
    price: 1399,
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      '5 Pages',
      'Contact Form',
      'Basic SEO',
      'free Hosting',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 2199,
    features: [
      'Everything in Starter',
      '10 Pages',
      'E-commerce Integration',
      'Advanced SEO',
      'Social Media Integration',
      'Free Hosting',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 4999,
    features: [
      'Everything in Professional',
      'Unlimited Pages',
      'Custom Functionality',
      'Priority Support',
      'Performance Optimization',
      'Free Hosting And Domain',
    ],

    popular: false,
  },
];

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-xl ₹{
                plan.popular
                  ? 'bg-gradient-to-b from-purple-600/20 to-blue-600/20 border border-purple-500/20'
                  : 'bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-gray-400 ml-2">/Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`
                    block w-full py-3 px-6 rounded-lg text-center
                    ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }
                    transition-all duration-200
                  `}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;