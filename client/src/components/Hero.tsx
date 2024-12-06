import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, scaleIn, textVariant } from "../lib/animations";

export function Hero() {
  const scrollToCampaign = () => {
    document.getElementById('campaign')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/pegasus-in-color-field.png"
          alt="Black Unicorn"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="relative z-10 text-center space-y-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <motion.img
          src="/higher+.png"
          alt="Higher+"
          className="h-24 mx-auto"
          variants={scaleIn}
        />
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          variants={textVariant}
        >
          Higher's Creative Factory
        </motion.h1>
        
        <motion.div
          variants={fadeIn}
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToCampaign}
            className="bg-white/90 hover:bg-white text-black transform transition-transform hover:scale-105"
          >
            Enter the Factory
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
