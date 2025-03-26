import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-orange-500/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1561227414-a7cd2130328c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Panda Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        Sai Dileep Chippada
      </h1>
      <h2 className="text-xl md:text-2xl mb-6 text-slate-600 dark:text-gray-400">
        Full Stack Developer | Graduate Student
      </h2>
      <p className="max-w-2xl mb-8 text-slate-600 dark:text-gray-400">
        Pursuing Master of Science in Information Science at University of North Texas. 
        Passionate about cutting-edge technologies in software development and contributing to the technological revolution.
      </p>
      <div className="flex items-center justify-center space-x-2 mb-8">
        <Phone className="w-5 h-5 text-orange-500" />
        <span className="text-slate-600 dark:text-gray-400">(978) 441-8579</span>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/dileep4passion"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/90 dark:bg-gray-800/50 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors backdrop-blur-sm shadow-sm"
        >
          <Github className="w-6 h-6 text-slate-700 dark:text-gray-300" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/90 dark:bg-gray-800/50 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors backdrop-blur-sm shadow-sm"
        >
          <Linkedin className="w-6 h-6 text-slate-700 dark:text-gray-300" />
        </a>
        <a
          href="mailto:chsaidileep2023@gmail.com"
          className="p-2 rounded-full bg-white/90 dark:bg-gray-800/50 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors backdrop-blur-sm shadow-sm"
        >
          <Mail className="w-6 h-6 text-slate-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;