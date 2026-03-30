"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex">

      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* LEFT SIDEBAR */}
      <div className="hidden md:flex flex-col justify-between w-1/3 h-screen sticky top-0 p-10 border-r border-gray-800">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Ganesh Sai Dontineni
          </h1>

          <p className="mt-3 text-gray-400">
            DevOps Engineer | Cloud | Data
          </p>

          <div className="mt-6 space-y-2 text-gray-500 text-sm">
            <p>✔ 6+ Years Experience</p>
            <p>✔ 70% Latency Reduction</p>
            <p>✔ 25% Cost Savings</p>
          </div>

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

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-2/3 p-6 md:p-12 space-y-20">

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">About</h2>
          <p className="text-gray-400 leading-7">
            DevOps and Cloud Infrastructure Engineer with 6+ years of experience building scalable systems across AWS, Azure, and GCP. 
            Specialized in Kubernetes, Terraform, CI/CD pipelines, and observability. Strong focus on automation, reliability, and performance optimization.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="space-y-8">
            {[
              {
                role: "DevOps & Data Engineer",
                company: "Cogent Cube",
                desc: "Designed ETL pipelines, automated infrastructure, and improved observability systems."
              },
              {
                role: "DevOps Engineer",
                company: "Validus Fintech",
                desc: "Reduced API latency by 70% and cloud costs by 25% using Kubernetes optimization."
              },
              {
                role: "Junior DevOps Engineer",
                company: "Rekall Software",
                desc: "Improved uptime by 35% through monitoring and incident response."
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="border-l border-gray-700 pl-6 hover:border-blue-500 transition"
              >
                <h3 className="text-white font-semibold">
                  {job.role} — {job.company}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Projects</h2>

          <div className="space-y-10">
            {[
              {
                title: "Kubernetes Platform",
                desc: "EKS + Terraform + GitOps deployment with full observability.",
                link: "https://github.com/GaneshSaiD"
              },
              {
                title: "K8s AI Assistant",
                desc: "RAG chatbot using LangChain + Pinecone with real-time responses.",
                link: "https://github.com/GaneshSaiD/k8s-rag-chatbot"
              },
              {
                title: "Big Data ML Pipeline",
                desc: "PySpark ML pipeline with 91% accuracy on large datasets."
              }
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition duration-300">
                  {proj.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {proj.desc}
                </p>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    className="text-blue-400 text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="text-gray-400">
            Feel free to reach out for opportunities or collaborations.
          </p>

          <p className="mt-4 text-gray-300">
            gsdontineni1998@gmail.com
          </p>
        </motion.section>

      </div>
    </div>
  );
}