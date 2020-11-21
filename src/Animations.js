export const pageAnimations = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
