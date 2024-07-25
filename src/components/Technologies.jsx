import React from 'react';
import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiTensorflow } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills & Technologies
      </motion.h2>
      <div className="flex flex-col items-center">
        {Object.keys(SKILLS).map((category, index) => (
          <div key={index} className="mb-8 w-full max-w-4xl">
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/_/g, ' ')}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {SKILLS[category].map((skill, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 text-white rounded-full p-4 text-sm font-medium"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-12"
      >
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-5xl" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-5xl text-green-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFiletypeSql className="text-5xl text-red-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
