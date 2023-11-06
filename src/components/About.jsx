import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full cursor-grab">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        As a Senior Full-Stack CMS Developer, I have extensive experience in
        developing and maintaining web applications using modern technologies
        such as JavaScript frameworks, mobile frameworks, and Content Management Systems.  <br />
        I am skilled in both front-end and back-end development with React and Python.
        I have developed several web applications by using Shopify and WordPress.
        I have excellent communication skills and can work well in a team environment. <br />
        <br />
        {/* <span className="bg-gradient-to-r from-purple-500 to-purple-900 text-white">
          Developed this website using Three.js, React.js, and Tailwind CSS.
        </span>{" "} */}
        <span className="bg-gradient-to-r text-white">
          Developed this website using Three.js, React.js, and Tailwind CSS.
        </span>{" "} <br />
        Beyond coding, I enjoy Football, Guitar, Photography, and Video Editing. <br />
        I'm driven by a desire for continuous growth and always eager to explore
        new technologies and frameworks. Let's connect and collaborate on
        meaningful projects together!
      </motion.p>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
