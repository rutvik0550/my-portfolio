import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./profile.jpeg";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "SkillBridge App",
      description: "A modern goal management and skill tracking app with user profiles",
      tech: ["Angular", "ASP.NET Core", "SQLite"],
      links: [
        { label: "View UI", icon: "bi-box-arrow-up-right", url: "https://skill-bridge-ui-rutvik-deshmukh.vercel.app/" },
        { label: "API", icon: "bi-box-arrow-up-right", url: "https://skillbridge-rutvik-deshmukh.onrender.com/swagger/index.html" },
        { label: "Code", icon: "bi-github", url: "https://github.com/rutvik0550/SkillBridge" },
      ],
    },
    {
      id: 2,
      title: "CureWell App",
      description: "A healthcare management platform built on modern web technologies",
      tech: ["Angular", ".NET Core", "SQL"],
      links: [
        { label: "View UI", icon: "bi-box-arrow-up-right", url: "https://curewell-angular-rutvik-s-deshmukh.vercel.app/viewDoctors" },
        { label: "API", icon: "bi-box-arrow-up-right", url: "https://curewell.onrender.com/swagger/index.html" },
        { label: "Code", icon: "bi-github", url: "https://github.com/rutvik0550/CureWell" },
      ],
    },
  ];

  const skills = [
    { name: "Angular", icon: "bi-code-slash" },
    { name: "React", icon: "bi-lightning-fill" },
    { name: ".NET Core", icon: "bi-cpu" },
    { name: "SQL", icon: "bi-database" },
    { name: "JavaScript", icon: "bi-braces" },
    { name: "TypeScript", icon: "bi-braces" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl shadow-cyan-500/10" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-0 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent -ml-.1">
            Rutvik Deshmukh
          </h2>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="space-y-12 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-500/50 text-cyan-400">
                  Welcome to my portfolio
                </span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    Rutvik
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-300 font-semibold">
                Full-Stack Developer | React & Angular Expert | .NET Core Specialist
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Building beautiful, scalable web applications with modern technologies. I specialize in creating seamless user experiences and robust backend solutions. Open to freelance opportunities and exciting collaborations worldwide.
              </p>

              <div className="flex gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  View My Work →
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-block"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-end items-start -mr-20 pt-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src={profilePic}
                  alt="Rutvik Deshmukh"
                  className="relative w-80 h-[32rem] rounded-3xl object-cover border-2 border-cyan-500/30 shadow-2xl filter brightness-90 "
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex items-center px-6 py-14">
          <div className="max-w-6xl mx-auto w-full">
            <h3 className="text-5xl font-bold mb-8 text-left">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Content */}
              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm a passionate full-stack developer with 3+ years of experience building scalable web applications. My journey in tech is driven by a love for problem-solving and creating intuitive user experiences.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I specialize in modern web technologies, with deep expertise in Angular, React, and .NET Core. I believe in writing clean, maintainable code and delivering solutions that exceed expectations.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1YeB2K2hKyecqJQSK-lMA7w7hZr4WoNsW/view?usp=sharing" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
                >
                  <i className="bi bi-file-earmark-pdf mr-2"></i>
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Download Resume</span>
                </a>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="group p-4 rounded-lg bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-slate-700/70 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-semibold text-sm">{skill.name}</span>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-500/50">
                          <i className={`bi ${skill.icon}`}></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex items-center px-6 py-14">
          <div className="max-w-6xl mx-auto w-full">
            <h3 className="text-5xl font-bold mb-2 text-left">
              Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h3>
            <p className="text-left text-gray-400 mb-8">Showcasing my latest and greatest work</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700 hover:border-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/15 border border-cyan-500/40 rounded-full text-sm text-cyan-300 hover:bg-cyan-500/25 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 flex items-center gap-2 text-sm font-medium hover:text-cyan-300"
                        >
                          <i className={`bi ${link.icon}`}></i>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex items-center px-6 py-14">
          <div className="w-full max-w-6xl mx-auto">
            <h3 className="text-5xl font-bold mb-2 text-left">
              Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h3>
            <p className="text-left text-gray-400 mb-12">Let's work together on something amazing</p>

            <div className="space-y-8 w-full">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <a 
                  href="mailto:rutvik.deshmukh.0550@gmail.com" 
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-500/20 hover:to-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">Email</p>
                      <p className="text-white font-bold group-hover:text-cyan-400 transition-colors">rutvik.deshmukh.0550@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/rutvik-deshmukh-0bb478196" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-500/20 hover:to-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">LinkedIn</p>
                      <p className="text-white font-bold group-hover:text-cyan-400 transition-colors">Connect with me</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <form action="https://formspree.io/f/meozgdjw" method="POST" className="space-y-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-10 rounded-2xl border border-slate-700 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-lg bg-slate-700/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-lg bg-slate-700/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-6 py-4 rounded-lg bg-slate-700/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-white flex items-center justify-center gap-2"
                >
                  Send Message <i className="bi bi-send"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-6 px-6 text-center">
        <p className="text-gray-400 text-sm mb-1">© {new Date().getFullYear()} Rutvik Deshmukh. All rights reserved.</p>
        <p className="text-gray-500 text-xs">Built with React | Designed for the modern web</p>
      </footer>
    </div>
  );
}

export default App;
