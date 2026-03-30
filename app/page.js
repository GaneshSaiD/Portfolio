"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "about";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        if (top >= offset) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">

      {/* CURSOR GLOW */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_50%)]" />

      {/* SIDEBAR */}
      <div className="hidden md:flex flex-col justify-between w-1/3 h-screen sticky top-0 p-10 border-r border-gray-800">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Ganesh Sai Dontineni
          </h1>

          <p className="mt-3 text-gray-400">
            DevOps Engineer | Cloud | Data
          </p>

          {/* NAV */}
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

        {/* ICONS */}
        <div className="flex space-x-5 text-2xl text-gray-400">
          <a href="https://github.com/GaneshSaiD" target="_blank">
            <FaGithub className="hover:text-white hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/ganeshsaidontineni" target="_blank">
            <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur p-4 z-50 flex justify-between items-center">
        <h1 className="text-lg font-bold">Ganesh</h1>

        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/GaneshSaiD"><FaGithub /></a>
          <a href="https://linkedin.com/in/ganeshsaidontineni"><FaLinkedin /></a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-2/3 p-6 md:p-12 space-y-24 mt-16 md:mt-0">

        {/* ABOUT */}
        <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">About</h2>
          <p className="text-gray-400 leading-7">
            DevOps and Cloud Infrastructure Engineer with 6+ years of experience designing,
            automating, and operating production-grade cloud infrastructure across AWS, Azure,
            and GCP. Specialized in Kubernetes, Terraform, CI/CD automation, and observability.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">Experience</h2>

          <div className="space-y-8">
            <motion.div whileHover={{ x: 10 }} className="border-l border-gray-700 pl-6 hover:border-blue-500">
              <h3 className="text-white font-semibold">DevOps & Data Engineer — Cogent Cube</h3>
              <p className="text-gray-400 text-sm mt-2">Built ETL pipelines, automated infrastructure, improved monitoring.</p>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="border-l border-gray-700 pl-6 hover:border-blue-500">
              <h3 className="text-white font-semibold">DevOps Engineer — Validus Fintech</h3>
              <p className="text-gray-400 text-sm mt-2">Reduced latency by 70% and cloud costs by 25%.</p>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} className="border-l border-gray-700 pl-6 hover:border-blue-500">
              <h3 className="text-white font-semibold">Junior DevOps Engineer — Rekall Software</h3>
              <p className="text-gray-400 text-sm mt-2">Improved uptime by 35% through monitoring systems.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="section-title">Projects</h2>

          <div className="space-y-10">

            <motion.div whileHover={{ scale: 1.02 }} className="group">
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition">
                Kubernetes Infrastructure Platform
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Built production-grade EKS clusters using Terraform and GitOps with ArgoCD.
              </p>
              <a href="https://github.com/GaneshSaiD" className="text-blue-400 text-sm opacity-0 group-hover:opacity-100">
                View Code →
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="group">
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition">
                K8s AI Assistant (RAG Chatbot)
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                RAG chatbot using LangChain + Pinecone with real-time responses.
              </p>
              <a href="https://github.com/GaneshSaiD/k8s-rag-chatbot" className="text-blue-400 text-sm opacity-0 group-hover:opacity-100">
                View Code →
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="group">
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition">
                Big Data ML Pipeline
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                PySpark ML pipeline with 91% accuracy on large datasets.
              </p>
            </motion.div>

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