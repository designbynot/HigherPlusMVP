import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "../lib/animations";

export function Hero() {
  const scrollToCampaign = () => {
    document.getElementById('campaign')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/black-unicorn.png"
          alt="Black Unicorn"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 text-center space-y-8">
        <motion.img
          src="/higher+.png"
          alt="Higher+"
          className="h-24 mx-auto"
          {...fadeIn}
        />
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Creative Factory // On My Higher Horses
        </motion.h1>
        
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToCampaign}
            className="bg-white/90 hover:bg-white text-black"
          >
            Enter the Factory
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
