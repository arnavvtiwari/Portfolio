import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description: 'A full-featured e-commerce application built with the MERN stack, featuring user authentication, product listings, and secure payment gateway integration.',
    githubLink: 'https://github.com/arnavvtiwari/FreaksStore', 
  },
  {
    id: 2,
    title: 'Workout Tracker',
    description: 'A web application that allows users to log and manage their workouts, track progress, and set fitness goals, utilizing the MERN stack for seamless performance.',
    githubLink: 'https://github.com/arnavvtiwari/workout-tracker', // Replace 
  },
  {
    id: 3,
    title: 'URL Shortening Service',
    description: 'A user-friendly URL shortening application that allows users to shorten long URLs, track clicks, and manage their links, built with Node.js and React.',
    githubLink: 'https://github.com/arnavvtiwari/urlshortener', 
  },
  {
    id: 4,
    title: 'Web Arcade',
    description: 'A collection of games built with React, featuring popular games like 2048, Flappy Birds etc.',
    githubLink: 'https://github.com/arnavvtiwari/Web-Arcade', 
  },
  {
    id: 5,
    title: 'Employee Management System',
    description: 'An Employee Management System built with Spring Boot, JSP, and PostgreSQL, featuring user authentication, role-based access control, and a responsive UI.',
    githubLink: 'https://github.com/arnavvtiwari/SpringBootProject', 
  },
  {
    id: 6,
    title: 'NPM Package - Get Stock Price',
    description: 'An npm package that allows users to fetch real-time stock and crypto prices from Finnhub, built with Node.js and JavaScript.',
    githubLink: 'https://github.com/arnavvtiwari/getstockprice', 
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className=" min-h-screen bg-gray-800 text-white">
      <h1 className="font-mono text-4xl font-bold text-center pt-8">My Projects</h1>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {projects.map((project) => (
          <div key={project.id} className=" bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="font-thin text-2xl font-bold mb-2">{project.title}</h2>
            <p className="font-thin text-gray-300 mb-4">{project.description}</p>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
