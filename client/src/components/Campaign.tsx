import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer, scaleIn, textVariant, sectionContainer } from "../lib/animations";

const campaignImages = [
  {
    src: "/black-unicorn.png",
    caption: "Embrace new technology"
  },
  {
    src: "/chrome-horse.png",
    caption: "Stand out from the crowd"
  },
  {
    src: "/unicorn-running-in-flowers.png",
    caption: "Run towards your dream life"
  },
  {
    src: "/colorful-horses-head.png",
    caption: "Go higher together"
  }
];

export function Campaign() {
  return (
    <section id="campaign" className="py-20 bg-white overflow-hidden">
      <motion.div
        variants={sectionContainer}
        initial="initial"
        whileInView="whileInView"
        className="relative"
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={textVariant}
        >
          Higher Horses
        </motion.h2>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {campaignImages.map((image, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <Card className="group relative overflow-hidden aspect-square">
                  <motion.img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-xl font-medium text-center px-6">
                      {image.caption}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
