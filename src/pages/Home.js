import image from "../assets/hero-image.png";
import { Button } from "../components/Button";
import { ToolsList } from "../components/ToolsList";
import { RecipesList } from "../components/RecipesList";
import "./Home.scss";
import pic from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { pageVariants, introVariants, introChildVariants } from "../animations";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "../components/Box";

const heroImgVariant = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffnes: 100,
      duration: 1,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    inView
      ? animation.start({
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        })
      : animation.start({
          y: 100,
          opacity: 0,
        });
  }, [inView, animation]);

  return (
    <>
      <Helmet>
        <title>Cocktail Nation</title>
      </Helmet>
      <motion.div
        className="home"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <section className="hero">
          <motion.div className="hero-content" variants={introVariants}>
            <motion.h1 variants={introChildVariants}>
              homemade <span>cocktails</span> can be better
            </motion.h1>
            <motion.p variants={introChildVariants}>
              Why go out to get a couple of drinks when you can make your own
              elegant cocktails at home? You ready?
            </motion.p>
            <motion.div variants={introChildVariants}>
              <Link to="/recipes">
                <Button className="btn">view recipes</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            variants={heroImgVariant}
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt="Red cocktail in a glass cup" />
          </motion.div>
          <Box type="slantBox" pos="-1px" />
        </section>

        <section className="tools-highlight" ref={ref}>
          <h2>
            Get the right <span>tools</span>
          </h2>
          <ToolsList numberOfTools={3} animation={animation} />
          <Link to="/tools">
            <Button className="btn">view all</Button>
          </Link>

          <Box type="slantBox" bgColor="#303134" pos="-1px" />
        </section>

        <section className="top-recipes">
          <h2>
            Top <span>recipes</span>
          </h2>
          <RecipesList />
          <Link to="/recipes">
            <Button className="btn">view more</Button>
          </Link>
        </section>

        <Box type="backgroundBox" bgImage={pic}>
          <h1>
            Try a deliciously elegant <span>cocktail</span> now
          </h1>
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
