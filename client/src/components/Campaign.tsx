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
                <Card 
                  className="group relative overflow-hidden aspect-square cursor-pointer"
                  onClick={() => {
                    // Open in lightbox or modal view
                    window.open(image.src, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    layoutId={`campaign-image-${index}`}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <motion.p 
                      className="text-white text-xl font-medium text-center"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {image.caption}
                    </motion.p>
                    <motion.p 
                      className="text-white/80 text-sm mt-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Click to expand
                    </motion.p>
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
