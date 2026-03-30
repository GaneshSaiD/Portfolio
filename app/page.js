"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-xl font-bold">Ganesh</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Ganesh Sai Dontineni
        </h1>

        <p className="text-xl mt-4 text-gray-400">
          DevOps Engineer | Cloud Engineer | SRE | Data Engineer
        </p>

        <a
          href="/Ganesh_Resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
        >
          Download Resume
        </a>

        <div className="mt-6 space-y-2 text-gray-300">
          <p>✔ 6+ Years Experience</p>
          <p>✔ Reduced API latency by 70%</p>
          <p>✔ Reduced cloud costs by 25%</p>
          <p>✔ Improved uptime by 35%</p>
        </div>
      </motion.section>

      {/* KEY ACHIEVEMENTS */}
      <section className="mb-20 grid md:grid-cols-3 gap-6 text-center">
        {[
          { value: "70%", label: "Latency Reduction", color: "blue" },
          { value: "25%", label: "Cloud Cost Savings", color: "green" },
          { value: "35%", label: "Uptime Improvement", color: "purple" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900 rounded-xl"
          >
            <h2 className={`text-4xl font-bold text-${item.color}-500`}>
              {item.value}
            </h2>
            <p className="text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-7">
          DevOps and Cloud Infrastructure Engineer with 6+ years of experience designing,
          automating, and operating production-grade cloud infrastructure across AWS, Azure,
          and GCP. Specialized in Kubernetes, Terraform, CI/CD automation, and observability.

          Recently completed MS in Data Engineering with focus on PySpark, distributed systems,
          and AI systems including RAG architectures.
        </p>
      </motion.section>

      {/* SKILLS */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            ["Cloud & Platform", "AWS, Azure, GCP, Kubernetes, Docker, ArgoCD"],
            ["Infrastructure", "Terraform, Ansible, CloudFormation"],
            ["CI/CD", "GitHub Actions, Jenkins, GitLab CI"],
            ["Observability", "Prometheus, Grafana, ELK, Datadog"],
            ["Data Engineering", "PySpark, BigQuery, ETL"],
            ["AI / ML", "LangChain, RAG, Pinecone, FastAPI"]
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }}>
              <h3 className="font-semibold text-white">{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card */}
          {[
            {
              title: "Kubernetes Platform",
              desc: "EKS + Terraform + GitOps deployment with full observability.",
              tech: "AWS, Terraform, Kubernetes",
              link: "https://github.com/GaneshSaiD"
            },
            {
              title: "K8s AI Assistant",
              desc: "RAG chatbot delivering answers in 2–3 seconds.",
              tech: "LangChain, Pinecone, FastAPI",
              link: "https://github.com/GaneshSaiD/k8s-rag-chatbot"
            },
            {
              title: "Big Data ML Pipeline",
              desc: "PySpark ML pipeline with 91% accuracy on large datasets.",
              tech: "PySpark, MLlib"
            },
            {
              title: "AWS Data Pipeline",
              desc: "Processed $1.3B+ data using S3 + PySpark.",
              tech: "AWS, PySpark"
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{proj.desc}</p>

              {/* OPTIONAL DIAGRAM IMAGE */}
              {/* <img src="/eks-architecture.png" className="rounded-xl mt-3" /> */}

              <p className="text-xs text-gray-500">{proj.tech}</p>

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-400 text-sm mt-3 inline-block"
                >
                  View Code →
                </a>
              )}
            </motion.div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="font-bold text-white">DevOps & Data Engineer — Cogent Cube</h3>
            <p>Built ETL pipelines and automated infrastructure systems.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">DevOps Engineer — Validus Fintech</h3>
            <p>Reduced latency by 70% and cloud costs by 25%.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">Junior DevOps Engineer — Rekall Software</h3>
            <p>Improved uptime by 35% through monitoring systems.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">Email: gsdontineni1998@gmail.com</p>
        <p className="text-gray-300">GitHub: github.com/GaneshSaiD</p>
        <p className="text-gray-300">LinkedIn: linkedin.com/in/ganeshsaidontineni</p>
      </section>

    </main>
  );
}