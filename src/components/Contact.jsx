import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fyp4dyg",
        "template_s5h7jhf",
        {
          form_name: form.name,
          to_name: shahnawaz,
          form_email: form.email,
          to_email: "shahanx000@gmail.com",
          message: form.message,
        },
        "6tttMj_CzKIHg4806"
      )
      .then(() => {
        setLoading(false);
        alert("Thank You... I will get back to you as soon as possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (err) => {
            setLoading(false);
            console.log(err);
            alert("Something went wrong");
          }
        );
      });
  };

  return (
    <div className="xl:mt-8 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black p-6 bg-tertiary"
      >
        <p className={styles.sectionSubText}>Get in Touch...</p>
        <h2 className={styles.heroHeadText}>Contact</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-[13px] border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-primary py-4 px-6 placeholder:text-[13px] placeholder:text-secondary border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say..."
              className="bg-primary py-4 px-6 placeholder:text-[13px] placeholder:text-secondary border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-primary py-3 px-8 outline-none text-white font-bold shadow-md hover:bg-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
