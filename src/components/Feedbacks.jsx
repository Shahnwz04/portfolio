import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  image,
  company,
  designation,
  name,
  testimonial,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black p-10 rounded-3xl xs:w-[310px] w-[300px]"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white flex gap-1 font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              <p>{name}</p>
            </p>
            <p className="mt-1 text-gray-400 text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-4 rounded-[20px]">
      <div
        className={`rounded-2xl ${styles.padding} min-h-[340px]`}
        style={{ background: "rgba(29, 24, 54, 1)" }}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say...</p>
          <h2 className={styles.heroHeadText}>Testimonails</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-14 pb-14 flex flex-wrap text-center gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonials.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
