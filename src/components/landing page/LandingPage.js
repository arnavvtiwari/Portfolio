// src/pages/LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-gray-900 flex flex-col items-center text-white">
        {/* Wrapper for animated circles and header */}
        <div className="flex flex-col justify-center items-center flex-grow">
          {/* Animated Circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500 opacity-50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-pink-500 opacity-50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-blue-500 opacity-50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-2/3 left-1/4 w-20 h-20 rounded-full bg-pink-500 opacity-50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 text-center mt-20"
          >
            <h1 className="font-mono text-5xl font-bold mb-4">Arnav Tiwari</h1>
            <h3 className="font-thin text-2xl font-semibold">Welcome to my Portfolio</h3>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <div ref={aboutRef} className="bg-gray-800 p-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-white mb-4">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 max-w-3xl text-center transition-opacity duration-1000"
        >
          As a final-year Computer Science student at IET Lucknow, I am passionate about leveraging technology to create impactful solutions. My academic journey has equipped me with a solid foundation in both theoretical concepts and practical applications of software development. I specialize in full-stack development, proficient in technologies like React and Node.js for building dynamic user interfaces and robust backend systems. I also have a strong grasp of Spring Boot, which enhances my ability to develop scalable web applications. My experience with databases like PostgreSQL and MongoDB allows me to manage data effectively and optimize performance. Additionally, I am skilled in using Tailwind CSS to create responsive designs that enhance user experience. My toolkit also includes version control systems like Git and familiarity with Docker for containerization, enabling efficient collaboration and deployment. As I approach the end of my degree, I am excited to apply my knowledge to real-world projects and contribute to innovative solutions that advance the field of technology.
        </motion.p>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="bg-gray-800 p-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-white mb-4 mt-5">Projects</h2>
        <div className="flex flex-col space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold">E-Commerce Store</h3>
            <p className="text-gray-300">
              A full-featured e-commerce application built with the MERN stack, featuring user authentication, product listings, and a secure payment gateway integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold">Workout Tracker</h3>
            <p className="text-gray-300">
              A web application that allows users to log and manage their workouts, track progress, and set fitness goals, utilizing the MERN stack for seamless performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold">URL Shortening Service</h3>
            <p className="text-gray-300">
              A user-friendly URL shortening application that allows users to shorten long URLs, track clicks, and manage their links, built with Node.js and React.
            </p>
          </motion.div>
          <a
            href="/projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View My Projects
          </a>
          <footer className="mt-48 text-center bg-gray-800 text-gray-400">
            <p>© {new Date().getFullYear()} Arnav Tiwari. All rights reserved.</p>
          </footer>
        </div>
      </div>

      {/* Footer Section (optional) */}
    </>
  );
};

export default LandingPage;
