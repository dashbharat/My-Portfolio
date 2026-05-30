import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import profilePic from "../assets/profile.png";
import resume from "../assets/Bharat_Resume.pdf";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-[#915EFF]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-[#915EFF] blur-3xl opacity-30 rounded-full" />

              <img
                src={profilePic}
                alt="Bharat"
                className="relative w-28 h-28 rounded-full border-4 border-[#915EFF] object-cover"
              />
            </div>

            <h3 className="text-white text-2xl font-bold mt-4">Bharat Bhusan Dash</h3>

            <p className="text-secondary mt-2 max-w-sm">
              MERN Stack Developer passionate about building modern, responsive
              and scalable web applications.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-xl font-bold mb-4">Contact Me</h3>

            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bharatdash432@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 text-secondary cursor-pointer"
              >
                <FaEnvelope className="text-[#915EFF]" />
                <span>bharatdash432@gmail.com</span>
              </a>

              <a
                href="tel:+917008271238"
                className="flex items-center justify-center lg:justify-start gap-3 text-secondary cursor-pointer"
              >
                <FaPhoneAlt className="text-[#915EFF]" />
                <span>+91 7008271238</span>
              </a>
            </div>
          </div>

          {/* Resume + Social */}
          <div className="flex flex-col items-center">
            <a
              href={resume}
              download
              className="flex items-center gap-3 px-6 py-3 rounded-xl
              bg-gradient-to-r from-[#915EFF] to-[#B983FF]
              text-white font-semibold
              hover:scale-105 transition-all duration-300"
            >
              <FaDownload />
              Download My Resume
            </a>

            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/bharat-bhusan-dash-1a094129b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-secondary hover:text-[#915EFF] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/dashbharat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-secondary hover:text-[#915EFF] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-secondary hover:text-[#915EFF] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-[#915EFF]/20 text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Bharat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
