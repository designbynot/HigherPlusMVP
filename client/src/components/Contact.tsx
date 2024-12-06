import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "../lib/animations";
import { Twitter, Youtube, Mail } from "lucide-react";

export function Contact() {
  return (
    <footer className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          {...fadeIn}
        >
          Let's Go Higher
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Button variant="outline" asChild>
            <a href="mailto:team@higher.plus" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              team@higher.plus
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="https://twitter.com/higherplus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Twitter className="h-4 w-4" />
              @higherplus
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="https://youtube.com/c/HigherPlusMedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              Higher+ Media
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          className="space-y-4"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <img
            src="/higher+.png"
            alt="Higher+ Logo"
            className="h-8 mx-auto"
          />
          <p className="text-sm text-gray-400">
            Tagging the Internet
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
