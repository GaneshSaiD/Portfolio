"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const NAV_ITEMS = ["about", "experience", "projects", "contact"];

const EXPERIENCE = [
  {
    role: "DevOps & Data Engineer",
    company: "Cogent Cube",
    type: "IT Consulting & AI SaaS",
    period: "Jul 2025 – Present",
    bullets: [
      "Designed and maintained 3–5 scalable ETL pipelines processing GBs of data daily on AWS.",
      "Automated infrastructure provisioning for 2–4 services using Terraform and Python — zero manual drift.",
      "Built CI/CD pipelines using GitHub Actions supporting continuous delivery across containerized microservices.",
      "Implemented Prometheus + Grafana observability, reducing mean time to detection (MTTD).",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Validus Fintech Services",
    type: "SEBI-Registered Fund Administration",
    period: "May 2022 – Jul 2023",
    bullets: [
      "Operated Kubernetes clusters (EKS/AKS) supporting 10+ microservices with horizontal pod autoscaling.",
      "Reduced API latency by 70% (500ms → 150ms) through load balancer tuning and right-sizing compute.",
      "Lowered cloud costs by 25% via reserved instances, autoscaling policies, and unused resource cleanup.",
      "Built automated CI/CD pipelines using Jenkins and GitHub Actions across 10+ services.",
    ],
  },
  {
    role: "Junior DevOps Engineer",
    company: "Rekall Software",
    type: "IT Infrastructure Consulting",
    period: "Jul 2019 – May 2022",
    bullets: [
      "Built CI/CD pipelines across 3 environments (dev/staging/prod), reducing manual deployment steps by ~60%.",
      "Managed containerized workloads using Docker and Kubernetes for 5–8 microservices.",
      "Built company-wide observability from scratch — first centralized logging, metrics, and alerting at the company.",
      "Improved system uptime by 35% through proactive monitoring and on-call incident management.",
    ],
  },
];

const PROJECTS = [
  {
    id: "k8s-rag",
    title: "K8s Ops AI Assistant",
    subtitle: "RAG Chatbot for Kubernetes Operations",
    github: "https://github.com/GaneshSaiD/k8s-rag-chatbot",
    tags: ["Python", "LangChain", "Pinecone", "GPT-4o", "FastAPI", "Docker"],
    problem:
      "Kubernetes engineers waste critical minutes during incidents hunting through hundreds of documentation pages — while generic LLMs hallucinate kubectl commands and non-existent API fields, which is dangerous in production.",
    solution:
      "Built a full-stack RAG chatbot that ingests 15 official K8s documentation pages into a Pinecone vector database, then answers operational questions in 2–3 seconds by retrieving the top-5 most relevant chunks and grounding GPT-4o's response in them — every answer includes source citations, eliminating hallucination entirely.",
    outcome:
      "695 vectors indexed at ~$0.03 ingestion cost. Fully containerized via Docker Compose for one-command deployment, with a FastAPI REST backend (/query + /health endpoints) and a Streamlit chat UI with persistent conversation history.",
    metrics: [
      { label: "Vectors Indexed", value: "695" },
      { label: "Response Time", value: "2–3s" },
      { label: "Ingestion Cost", value: "$0.03" },
      { label: "K8s Docs Pages", value: "15" },
    ],
  },
  {
    id: "eks-platform",
    title: "Kubernetes Infrastructure Platform",
    subtitle: "Production-Grade AWS EKS on Terraform",
    github: "https://github.com/GaneshSaiD",
    tags: ["Terraform", "AWS EKS", "ArgoCD", "Helm", "Prometheus", "Grafana"],
    problem:
      "Spinning up production Kubernetes clusters is error-prone when done manually — configuration drift, undocumented changes, and non-repeatable deployments create risk and slow down engineering teams.",
    solution:
      "Provisioned production-grade AWS EKS clusters using modular Terraform IaC for fully auditable, repeatable deployments. Implemented GitOps-based continuous deployment with ArgoCD and Helm for declarative, version-controlled application delivery.",
    outcome:
      "Built a full observability stack with Prometheus and Grafana including custom dashboards, alerting rules, and incident runbooks — giving on-call engineers clear signal during production issues.",
    metrics: [
      { label: "IaC Modules", value: "Modular" },
      { label: "Deployment Model", value: "GitOps" },
      { label: "Observability", value: "Full Stack" },
      { label: "Drift", value: "Zero" },
    ],
  },
  {
    id: "ml-pipeline",
    title: "Heart Disease Prediction at Scale",
    subtitle: "Distributed Big Data ML Pipeline",
    github: null,
    tags: ["PySpark", "MLlib", "Random Forest", "AWS S3", "GCP Dataproc"],
    problem:
      "Health risk prediction models trained on small datasets fail to generalize. The BRFSS dataset has 250,000+ records — large enough to break single-machine ML workflows and require truly distributed computation.",
    solution:
      "Built a distributed ML pipeline using PySpark and Apache Spark that preprocesses 250K+ health records, engineers features, and benchmarks Random Forest, Decision Tree, and Gradient Boosted Trees (GBT) — all on a cluster-native, scalable architecture applicable to GCP Dataproc and BigQuery ML.",
    outcome:
      "Achieved 91% accuracy and 0.88 weighted F1-score with Random Forest. The full feature extraction, correlation analysis, and model evaluation pipeline was built with PySpark DataFrames, Pandas, and Matplotlib — directly applicable to production ETL workflows at scale.",
    metrics: [
      { label: "Accuracy", value: "91%" },
      { label: "F1 Score", value: "0.88" },
      { label: "Records", value: "250K+" },
      { label: "Models Benchmarked", value: "3" },
    ],
  },
];

const SKILLS = [
  { category: "Cloud", items: ["AWS (EKS, EC2, S3, IAM)", "Azure (AKS, Monitor)", "GCP (GKE, BigQuery)"] },
  { category: "Containers & IaC", items: ["Kubernetes", "Docker", "Terraform", "Helm", "ArgoCD"] },
  { category: "CI/CD & Observability", items: ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "ELK Stack"] },
  { category: "AI / Data", items: ["LangChain", "RAG", "Pinecone", "PySpark", "FastAPI"] },
];

function MetricBadge({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center">
      <span className="text-blue-400 font-bold text-lg leading-none">{value}</span>
      <span className="text-gray-500 text-xs mt-1">{label}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group bg-white/[0.02]"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mt-0.5">{project.subtitle}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition shrink-0 mt-1"
          >
            <FaGithub className="text-xl" />
          </a>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {project.metrics.map((m) => (
          <MetricBadge key={m.label} {...m} />
        ))}
      </div>

      {/* Expandable story */}
      <div className="mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gray-500 hover:text-blue-400 transition flex items-center gap-1"
        >
          {expanded ? "Hide details" : "Show details"}
          <span className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>↓</span>
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 space-y-4 text-sm text-gray-400 leading-6"
          >
            <div>
              <span className="text-gray-300 font-medium">Problem — </span>
              {project.problem}
            </div>
            <div>
              <span className="text-gray-300 font-medium">Solution — </span>
              {project.solution}
            </div>
            <div>
              <span className="text-gray-300 font-medium">Outcome — </span>
              {project.outcome}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "about";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      {/* Cursor glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_50%)]" />

      {/* SIDEBAR */}
      <div className="hidden md:flex flex-col justify-between w-1/3 h-screen sticky top-0 p-10 border-r border-gray-800">
        <div>
          <h1 className="text-3xl font-bold text-white">Ganesh Sai Dontineni</h1>
          <p className="mt-2 text-gray-400 text-sm">DevOps · Cloud · Data · AI</p>
          <p className="mt-1 text-gray-600 text-xs">Dallas, TX · Open to relocation</p>

          <nav className="mt-8 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block transition ${
                  active === item ? "text-blue-400" : "text-gray-500 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          <a
            href="/Ganesh_Resume.pdf"
            download
            className="inline-block mt-6 px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm"
          >
            Download Resume
          </a>

          {/* Skills */}
          <div className="mt-8 space-y-3">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">{s.category}</p>
                <p className="text-gray-400 text-xs leading-5">{s.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-5 text-2xl text-gray-400">
          <a href="https://github.com/GaneshSaiD" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/ganeshsaidontineni" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur p-4 z-50 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-lg font-bold">Ganesh Sai Dontineni</h1>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/GaneshSaiD" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/ganeshsaidontineni" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-2/3 p-6 md:p-12 space-y-24 mt-16 md:mt-0">

        {/* ABOUT */}
        <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">About</h2>
          <p className="text-gray-400 leading-7">
            DevOps and Cloud Infrastructure Engineer with 6+ years of experience designing, automating,
            and operating production-grade cloud infrastructure across AWS, Azure, and GCP. Specialized in
            Kubernetes, Terraform, CI/CD automation, and SRE observability. MS in Data Engineering from
            University of North Texas (2025), with applied work in distributed systems, PySpark, and AI
            engineering patterns including RAG pipelines and LLM orchestration.
          </p>
          <p className="text-gray-400 leading-7 mt-4">
            Delivered measurable outcomes across three companies: <span className="text-white">70% reduction in API latency</span>,{" "}
            <span className="text-white">25% decrease in cloud costs</span>, and{" "}
            <span className="text-white">35% improvement in uptime</span>.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Experience</h2>
          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l border-gray-700 pl-6 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{job.role}</h3>
                    <p className="text-blue-400 text-sm">{job.company} <span className="text-gray-600">· {job.type}</span></p>
                  </div>
                  <span className="text-gray-600 text-xs">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-500 text-sm mb-6">Click "Show details" on any project to read the full problem, solution, and outcome.</p>
          <div className="space-y-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Contact</h2>
          <p className="text-gray-400 text-sm leading-6 mb-4">
            Open to DevOps, Cloud, SRE, and Platform Engineering roles. STEM OPT work authorization. Available immediately.
          </p>
          <div className="space-y-2 text-sm">
            <a href="mailto:gsdontineni1998@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <span className="text-blue-500">✉</span> gsdontineni1998@gmail.com
            </a>
            <a href="https://linkedin.com/in/ganeshsaidontineni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
              <FaLinkedin className="text-blue-500" /> linkedin.com/in/ganeshsaidontineni
            </a>
            <a href="https://github.com/GaneshSaiD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <FaGithub /> github.com/GaneshSaiD
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}