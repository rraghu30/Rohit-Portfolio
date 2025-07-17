import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiHtml5, SiCss3, SiJavascript, SiCplusplus } from "react-icons/si";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const texts = ["MYSELF ROHIT RAGHAV", "I’M A FULL STACK DEVELOPER"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1000;

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];
      setDisplayText(currentText.slice(0, charIndex));

      if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, deletingSpeed);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, delayBetweenTexts);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, typingSpeed);
        }
      }
    };

    const typingTimeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`transition-all duration-500 font-sans ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-opacity-90 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center bg-black text-white">
        <div className="font-bold text-xl">Rohit Portfolio</div>
        <div className="space-x-4 hidden md:flex text-lg">
          <a href="#hero" className="hover:text-green-400 transition flex items-center gap-1">🏠 Home</a>
          <a href="#about" className="hover:text-green-400 transition flex items-center gap-1">📘 About</a>
          <a href="#education" className="hover:text-green-400 transition flex items-center gap-1">🎓 Education</a>
          <a href="#projects" className="hover:text-green-400 transition flex items-center gap-1">💼 Projects</a>
          <a href="#skills" className="hover:text-green-400 transition flex items-center gap-1">🛠️ Skills</a>
          <a href="#contact" className="hover:text-green-400 transition flex items-center gap-1">📞 Contact</a>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section id="hero" initial="hidden" animate="visible" variants={fadeInUp} className="min-h-fit flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 bg-black text-white">
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-widest font-mono uppercase hover:text-green-400">
            {displayText}<span className="animate-pulse">|</span>
          </h1>
          <div className="flex justify-center md:justify-start">
            <a href="#about" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Let’s get started ➜
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <motion.img
            initial={{ scale: 0.9, rotate: 0 }}
            animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src="/rohit.jpg"
            alt="Rohit Raghav"
            className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-6 min-h-fit">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I recently completed my graduaction degree in Computer Science and Engineering department from Government Engineering College, Banka.<br/>
           Passionate about building real-time applications, I aim to leverage my strong foundation in coding and academic projects to grow as a full-stack developer.</p><br/>
          <li><strong>TECHNICAL SKILLS :</strong> <br/>
        Java, C, C++, MySql, Spring Boot, HTML, CSS, JavaScript, TypeScript, React</li>
        <br/>
        <li><strong>SOFT SKILLS :</strong><br/>
         Communication, Leadership, Adaptability, Time Management, Teamwork, Motivation</li>
      </motion.section>

      {/* Education Section */}
      <motion.section id="education" className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-yellow-50 text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>GRADUATION DEGREE :</strong><br/>
           Government Engineering College, Banka, Bihar (2021 - 2025)<br /> In Computer Science and Engineering,<br/> CGPA: 8.1/10</li>
          <li><strong>SECONDARY EDUCATION: :</strong><br/>
           Sanghmitra Public School, Siwan, Bihar <br />Percentage: 69.8%</li>
          <li><strong>MATRICULLATION :</strong><br/> 
          Children Delight Public School, Chhapra, Bihar<br />Percentage: 81.0%</li>
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-6 min-h-fit">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Airline Reservations System:</strong> Book tickets online, check seat availability, and manage payments. <br />Tech: Java, Spring Boot, MySQL. <br /><a href="https://github.com/rraghu30/Airline-Reservation-System/" target="_blank" className="text-blue-600 underline">GitHub</a></li>
          <li><strong>Currency Converter:</strong> Web-based currency converter using real-time API. <br />Tech: Java, Spring Boot, HTML, CSS. <br /><a href="https://github.com/rraghu30/Currency-Converter/" target="_blank" className="text-blue-600 underline">GitHub</a></li>
          <li><strong>Employee Vendor Backend Project:</strong> REST API backend with database interaction. <br />Tech: Java, Spring Boot, JavaScript. <br /><a href="https://github.com/rraghu30/Employee-Vendor-Backend-project/" target="_blank" className="text-blue-600 underline">GitHub</a></li>
        </ul>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className={`p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-green-50 text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="mb-4">Here's what I bring to the table as a developer 🚀</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-4xl text-indigo-600 mb-6">
          <FaJava title="Java" />
          <SiSpringboot title="Spring Boot" />
          <SiMysql title="MySQL" />
          <SiHtml5 title="HTML" />
          <SiCss3 title="CSS" />
          <SiJavascript title="JavaScript" />
          <FaReact title="React" />
          <SiCplusplus title="C++" />
        </div>
        <li><strong>TECHNICAL SKILLS :</strong><br/>
        Java, C, C++, MySql, Spring Boot, HTML, CSS, JavaScript, TypeScript, React</li><br/>
        <li><strong>SOFT SKILLS :</strong><br/>
         Communication, Leadership, Adaptability, Time Management, Teamwork, Motivation</li>
        
      </motion.section>

       <div className={`transition-all duration-500 font-sans ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
       {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={`${darkMode ? "bg-gray-800 text-white" : "bg-cyan-50 text-gray-900"} p-6 min-h-fit`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <form
            action="https://formsubmit.co/rohitraghav4544@gmail.com"
            method="POST"
            className={`space-y-4 w-full md:w-1/2 ${darkMode ? "bg-black text-white" : "bg-white text-black"} p-6 rounded-lg shadow-md`}
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
            <input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full p-3 border rounded" />
            <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded h-32"></textarea>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
              Send
            </button>
          </form>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.img
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/rohit2.jpg"
              alt="Rohit Raghav"
              className="w-64 h-96 object-cover rounded-lg border-4 border-white shadow-xl"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>Email: <a href="mailto:rohitraghav4544@gmail.com" className="text-indigo-600">rohitraghav4544@gmail.com</a></p>
          <p>Phone: 6209811075</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/rohit-raghav-93743b258" className="text-indigo-600">Profile</a></p>
        </div>
      </motion.section>
    </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Rohit Raghav. All rights reserved.</p>
      </footer>
    </div>
  );
}
