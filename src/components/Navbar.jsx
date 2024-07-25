import React from 'react';
import logo from "../assets/logo_aa.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 px-4 sm:py-4 sm:px-6 bg-neutral-950 bg-opacity-50 backdrop-blur-sm">
      <div className="flex items-center">
        <img className="mx-2 h-10 sm:h-14" src={logo} alt="logo" />
      </div>
      <div className="flex space-x-4 items-center">
        <ul className="hidden sm:flex space-x-4 items-center">
          <li><a href="#hero" className="hover:bg-gray-700 px-3 py-2 rounded">Home</a></li>
          <li><a href="#about-me" className="hover:bg-gray-700 px-3 py-2 rounded">About Me</a></li>
          <li><a href="#skills" className="hover:bg-gray-700 px-3 py-2 rounded">Skills</a></li>
          <li><a href="#projects" className="hover:bg-gray-700 px-3 py-2 rounded">Projects</a></li>
          <li><a href="#certifications" className="hover:bg-gray-700 px-3 py-2 rounded">Certifications</a></li>
          <li><a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abhinav-airachia-b5b169229/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Piano-V" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/u/PianoV/" target="_blank"><SiLeetcode /></a>
      </div>
    </nav>
  );
}

export default Navbar;
