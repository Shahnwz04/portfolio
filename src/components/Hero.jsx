import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Shah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am an Software & Web Developer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-30 bottom-30 py-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[46px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-gray-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
