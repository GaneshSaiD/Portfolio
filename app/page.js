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
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Ganesh Sai Dontineni
        </h1>

        <p className="text-xl mt-4 text-gray-400">
          DevOps Engineer | Cloud Engineer | SRE | Data Engineer
        </p>

        <a
          href="/Ganesh_Resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
        >
          Download Resume
        </a>

        <div className="mt-6 space-y-2 text-gray-300">
          <p>✔ 6+ Years Experience</p>
          <p>✔ Reduced API latency by 70%</p>
          <p>✔ Reduced cloud costs by 25%</p>
          <p>✔ Improved uptime by 35%</p>
        </div>
      </section>

      {/* KEY ACHIEVEMENTS */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-900 rounded-xl">
            <h2 className="text-4xl font-bold text-blue-500">70%</h2>
            <p className="text-gray-400">Latency Reduction</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl">
            <h2 className="text-4xl font-bold text-green-500">25%</h2>
            <p className="text-gray-400">Cloud Cost Savings</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl">
            <h2 className="text-4xl font-bold text-purple-500">35%</h2>
            <p className="text-gray-400">Uptime Improvement</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-7">
          DevOps and Cloud Infrastructure Engineer with 6+ years of experience designing,
          automating, and operating production-grade cloud infrastructure across AWS, Azure,
          and GCP. Specialized in Kubernetes (EKS/AKS), Terraform, CI/CD automation, and SRE
          observability using Prometheus and Grafana.

          Recently completed MS in Data Engineering, expanding expertise into distributed data
          systems, PySpark pipelines, and AI-powered systems including RAG architectures.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="font-semibold text-white">Cloud & Platform</h3>
            <p>AWS, Azure, GCP, Kubernetes, Docker, Helm, ArgoCD</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Infrastructure</h3>
            <p>Terraform, Ansible, CloudFormation</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">CI/CD</h3>
            <p>GitHub Actions, Jenkins, GitLab CI</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Observability</h3>
            <p>Prometheus, Grafana, ELK, Datadog</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Data Engineering</h3>
            <p>PySpark, BigQuery, ETL Pipelines</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">AI / ML</h3>
            <p>LangChain, RAG, Pinecone, OpenAI, FastAPI</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              Kubernetes Infrastructure Platform
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              Built production-grade EKS clusters using Terraform and GitOps with ArgoCD.
            </p>
            <p className="text-xs text-gray-500">
              Tech: AWS, Terraform, Kubernetes, ArgoCD
            </p>
            <a href="https://github.com/GaneshSaiD" target="_blank" className="text-blue-400 text-sm mt-3 inline-block">
              View Code →
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-green-500 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              K8s AI Assistant (RAG Chatbot)
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              AI chatbot using LangChain & Pinecone delivering answers in 2–3 seconds.
            </p>
            <p className="text-xs text-gray-500">
              Tech: Python, LangChain, Pinecone, FastAPI
            </p>
            <a href="https://github.com/GaneshSaiD/k8s-rag-chatbot" target="_blank" className="text-blue-400 text-sm mt-3 inline-block">
              View Code →
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-purple-500 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              Big Data ML Pipeline
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              PySpark pipeline on 250K+ records achieving 91% accuracy.
            </p>
            <p className="text-xs text-gray-500">
              Tech: PySpark, MLlib
            </p>
          </div>

          {/* Project 4 */}
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              AWS Data Pipeline
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              Processed $1.3B+ sales data using S3 and PySpark.
            </p>
            <p className="text-xs text-gray-500">
              Tech: AWS, PySpark
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="font-bold text-white">DevOps & Data Engineer — Cogent Cube</h3>
            <p>Built ETL pipelines, automated infrastructure, and implemented monitoring systems.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">DevOps Engineer — Validus Fintech</h3>
            <p>Reduced latency by 70% and cloud costs by 25% using Kubernetes optimization.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">Junior DevOps Engineer — Rekall Software</h3>
            <p>Improved uptime by 35% through monitoring and incident response systems.</p>
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