import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// ServiceCard
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          style={{ backgroundColor: "#1d1836" }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="m-4 pl-4 text-gray-400 text-[17px] max-w-4xl leading-[30px]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, quibusdam
        porro aliquam, veniam blanditiis deleniti consequatur dolor natus velit
        possimus facilis maxime temporibus, incidunt illo voluptates rerum
        necessitatibus ullam nam iusto iste unde quia nobis recusandae dolorem?
        Tenetur eos libero voluptate vitae blanditiis molestias quam repellat
        facilis ullam. Quod ullam possimus architecto ipsa veniam illum omnis in
        culpa ipsum quam.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          //sending props to service card
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
