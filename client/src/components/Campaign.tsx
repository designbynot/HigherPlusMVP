import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn } from "../lib/animations";

const campaignImages = [
  {
    src: "/black-unicorn.png",
    caption: "Bold creativity in timeless narratives"
  },
  {
    src: "/chrome-horse.png",
    caption: "Reflecting innovation and artistic vision"
  },
  {
    src: "/unicorn-running-in-flowers.png",
    caption: "Freedom in creative expression"
  },
  {
    src: "/pegasus-in-color-field.png",
    caption: "Elevating stories beyond boundaries"
  }
];

export function Campaign() {
  return (
    <section id="campaign" className="py-20 bg-white">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        {...fadeIn}
      >
        On My Higher Horses
      </motion.h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaignImages.map((image, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-xl font-medium text-center px-6">
                    {image.caption}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
