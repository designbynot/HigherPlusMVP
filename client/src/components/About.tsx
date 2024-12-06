import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          {...fadeIn}
        >
          What is Higher+?
        </motion.h2>
        
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl leading-relaxed">
            Higher+ is a Creative Factory empowering visionaries to build systems, tools, and stories that resonate.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <img
            src="/higher+.png"
            alt="Higher+ Logo"
            className="h-16 mx-auto animate-pulse"
          />
        </motion.div>
      </div>
    </section>
  );
}
