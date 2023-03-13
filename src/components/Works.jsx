import React from "react";
import Tilt from "react-tilt";
import { color, motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-5 bg-black rounded-2xl sm:w-[340px] w-full"
        // style={{ backgroundColor: "#1d1836" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-3">
          <p className="flex">
            {tags.map((tag) => (
              <p className={`text-[14px] ${tag.color} pr-3`}>#{tag.name} </p>
            ))}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works...</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-4xl leading-[30px] "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa
          beatae nobis atque hic illum, ut totam cum minima illo voluptatibus
          nemo consequuntur, mollitia iste blanditiis deserunt ab ad adipisci
          cumque inventore corrupti non eveniet tempore! Qui ut facere
          cupiditate.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          //Sending props
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
