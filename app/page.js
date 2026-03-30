"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex">

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

        <div className="text-gray-500 text-sm space-y-2">
          <p>github.com/GaneshSaiD</p>
          <p>linkedin.com/in/ganeshsaidontineni</p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-2/3 p-6 md:p-12">

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="section-title">About</h2>

          <p className="text-gray-400 leading-7">
            DevOps and Cloud Infrastructure Engineer with 6+ years of experience designing,
            automating, and operating scalable cloud systems across AWS, Azure, and GCP.
            Specialized in Kubernetes, Terraform, CI/CD pipelines, and observability.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-20">
          <h2 className="section-title">Experience</h2>

          <div className="space-y-8">

            {[
              {
                role: "DevOps & Data Engineer",
                company: "Cogent Cube",
                desc: "Built ETL pipelines, automated infra, improved monitoring systems."
              },
              {
                role: "DevOps Engineer",
                company: "Validus Fintech",
                desc: "Reduced latency by 70% and cloud cost by 25%."
              },
              {
                role: "Junior DevOps Engineer",
                company: "Rekall Software",
                desc: "Improved uptime by 35% via monitoring systems."
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
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <h2 className="section-title">Projects</h2>

          <div className="space-y-10">

            {[
              {
                title: "Kubernetes Platform",
                desc: "EKS + Terraform + GitOps deployment with observability.",
                link: "https://github.com/GaneshSaiD"
              },
              {
                title: "K8s AI Assistant",
                desc: "RAG chatbot using LangChain + Pinecone.",
                link: "https://github.com/GaneshSaiD/k8s-rag-chatbot"
              },
              {
                title: "Big Data ML Pipeline",
                desc: "PySpark ML pipeline with 91% accuracy."
              }
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
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
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2 className="section-title">Contact</h2>

          <p className="text-gray-400">
            Feel free to reach out via email or LinkedIn.
          </p>

          <p className="mt-4 text-gray-300">
            gsdontineni1998@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
}