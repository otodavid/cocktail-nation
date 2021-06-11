export const pageVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const introVariants = {
  visible: {
    transition: {
      staggerChildren: 0.6,
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
};

export const introChildVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const scaleUpVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.7,
      type: "spring",
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const contentFadeInVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
