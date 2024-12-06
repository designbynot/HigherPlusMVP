export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
};

export const slideIn = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-20%" },
  transition: { 
    staggerChildren: 0.1,
    delayChildren: 0.3
  }
};

export const textVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { 
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 0.2
  }
};

export const sectionContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-20%" },
  transition: { 
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96],
    staggerChildren: 0.2,
    delayChildren: 0.1
  }
};
