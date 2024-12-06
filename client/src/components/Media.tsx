import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer, textVariant, scaleIn, sectionContainer } from "../lib/animations";

export function Media() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <motion.div
        variants={sectionContainer}
        initial="initial"
        whileInView="whileInView"
        className="container mx-auto px-4"
      >
        <motion.div
          className="text-center mb-12"
          variants={textVariant}
        >
          <h2 className="text-4xl font-bold mb-4">Higher+ Radio</h2>
          <p className="text-lg text-gray-600">Good music you should listen to</p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
        >
          <motion.div
            variants={scaleIn}
          >
            <Card className="relative overflow-hidden aspect-video">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/higher+.png"
                  alt="Higher+ Watermark"
                  className="w-full h-full object-contain"
                />
              </div>
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/videoseries?list=PL3Uwn9uK5dyjXeQmZ_JJXFMNTG70GBSbn"
                title="Higher+ Radio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
