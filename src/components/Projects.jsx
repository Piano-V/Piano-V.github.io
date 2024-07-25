import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap">
          <div className="grid grid-cols-2 gap-8 p-4 flex-none">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.05, rotate: 2 }} // Scale and rotate on hover
                whileTap={{ scale: 0.95 }} // Scale down on tap
                transition={{ type: 'spring', stiffness: 300 }} // Combined transition
                className="flex flex-col bg-neutral-900 p-4 rounded-lg shadow-md w-80"
              >
                <motion.img
                  className="mb-4 rounded"
                  src={project.image}
                  width={160}
                  height={160}
                  alt={project.title}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }} // Individual transition
                />
                <div className="text-center">
                  <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
                  <p className="mb-4 text-neutral-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
