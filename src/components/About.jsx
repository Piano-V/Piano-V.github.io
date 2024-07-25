import React from 'react';
import aboutImg from "../assets/about2.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-pink-300">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-96" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <div className="my-8">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="mt-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-neutral-400">{edu.institution}</p>
                    <p className="text-neutral-500">{edu.year}</p>
                    <p className="text-neutral-400">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
