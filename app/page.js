"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">

      {/* CURSOR GLOW */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* SCROLL BAR */}
      <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50 w-[var(--scroll)]" />

      {/* SIDEBAR (DESKTOP) */}
      <div className="hidden md:flex flex-col justify-between w-1/3 h-screen sticky top-0 p-10 border-r border-gray-800">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Ganesh Sai Dontineni
          </h1>

          <p className="mt-3 text-gray-400">
            DevOps Engineer | Cloud | Data
          </p>

          <nav className="mt-8 space-y-3 text-sm">
            {["about", "experience", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block transition ${
                  active === item
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          <a
            href="/Ganesh_Resume.pdf"
            download
            className="inline-block mt-6 px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Resume
          </a>
        </div>

        <div className="flex space-x-5 text-2xl text-gray-400">
          <a href="https://github.com/GaneshSaiD" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/ganeshsaidontineni" target="_blank">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur p-4 z-50 flex justify-between">
        <h1 className="text-lg font-bold">Ganesh</h1>
        <div className="flex space-x-4 text-xl">
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-2/3 p-6 md:p-12 space-y-24 mt-16 md:mt-0">

        {/* ABOUT */}
        <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">About</h2>
          <p className="text-gray-400 leading-7">
            DevOps Engineer with 6+ years building scalable cloud systems across AWS, Azure, and GCP.
            Specialized in Kubernetes, Terraform, CI/CD pipelines, and observability.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">Experience</h2>

          <div className="space-y-8">
            {[
              "DevOps & Data Engineer — Cogent Cube",
              "DevOps Engineer — Validus Fintech",
              "Junior DevOps Engineer — Rekall Software"
            ].map((job, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="border-l border-gray-700 pl-6 hover:border-blue-500"
              >
                <p className="text-white">{job}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">Projects</h2>

          <div className="space-y-10">
            {[
              "Kubernetes Platform",
              "K8s AI Assistant",
              "Big Data ML Pipeline"
            ].map((proj, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <h3 className="text-lg text-white hover:text-blue-400">
                  {proj}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">Contact</h2>
          <p className="text-gray-400">gsdontineni1998@gmail.com</p>
        </motion.section>

      </div>
    </div>
  );
}