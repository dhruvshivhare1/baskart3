import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Trophy, Clock } from 'lucide-react';

interface CounterProps {
  value: number;
  label: string;
  icon: React.ElementType;
}

const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * (end - start) + start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration]);

  return count;
};

const Counter: React.FC<CounterProps> = ({ value, label, icon: Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const count = useCounter(inView ? value : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-lg"
    >
      <Icon className="w-8 h-8 text-purple-500 mb-4" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
      >
        {count}+
      </motion.span>
      <span className="text-gray-400 mt-2">{label}</span>
    </motion.div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Counter value={80} label="Projects Completed" icon={Briefcase} />
            <Counter value={20} label="Happy Clients" icon={Users} />
            <Counter value={99} label="Success Rate" icon={Trophy} />
            <Counter value={4} label="Years Experience" icon={Clock} />
          </div>

          {/* Timeline Section */}
          <div className="space-y-12">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center">
                <Clock className="w-12 h-12 text-purple-500" />
              </div>
              <div className="ml-8">
                <h4 className="text-xl font-semibold mb-2">2025 - Present</h4>
                <p className="text-gray-400">Helping Business To Make Their Digital Presence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;