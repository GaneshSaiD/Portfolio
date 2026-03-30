export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Ganesh Sai Dontineni
        </h1>
        <p className="text-xl mt-4 text-gray-400">
          DevOps Engineer | Cloud Engineer | SRE | Data Engineer
        </p>

        <div className="mt-6 space-y-2 text-gray-300">
          <p>✔ 6+ Years Experience</p>
          <p>✔ Reduced API latency by 70%</p>
          <p>✔ Reduced cloud costs by 25%</p>
          <p>✔ Improved uptime by 35%</p>
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
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="space-y-10">

          {/* Project 1 */}
          <div>
            <h3 className="text-xl font-bold">Kubernetes Infrastructure Platform (AWS EKS)</h3>
            <p className="text-gray-400 mt-2">
              Built production-grade EKS clusters using Terraform with modular infrastructure.
              Implemented GitOps using ArgoCD and Helm with full observability via Prometheus & Grafana.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Tech: AWS, Terraform, Kubernetes, ArgoCD, Prometheus
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <h3 className="text-xl font-bold">K8s Ops AI Assistant (RAG Chatbot)</h3>
            <p className="text-gray-400 mt-2">
              Built AI chatbot using LangChain, Pinecone, FastAPI, and Streamlit to answer Kubernetes queries.
              Designed ingestion + query pipelines delivering responses in 2–3 seconds.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Tech: Python, LangChain, Pinecone, FastAPI, Docker
            </p>
          </div>

          {/* Project 3 */}
          <div>
            <h3 className="text-xl font-bold">Heart Disease Prediction (Big Data ML)</h3>
            <p className="text-gray-400 mt-2">
              Built distributed ML pipeline using PySpark on 250K+ records achieving 91% accuracy.
              Benchmarked Random Forest, Decision Trees, and GBT models.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Tech: PySpark, MLlib, Pandas
            </p>
          </div>

          {/* Project 4 */}
          <div>
            <h3 className="text-xl font-bold">Amazon Sales Data Pipeline</h3>
            <p className="text-gray-400 mt-2">
              Built cloud-based ETL pipeline using AWS S3 and PySpark processing $1.3B sales data.
              Implemented clustering and large-scale analytics.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Tech: AWS S3, PySpark, MLlib
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6 text-gray-300">

          <div>
            <h3 className="font-bold text-white">DevOps & Data Engineer — Cogent Cube</h3>
            <p>Designed ETL pipelines, automated infrastructure, built CI/CD pipelines, and implemented monitoring.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">DevOps Engineer — Validus Fintech</h3>
            <p>Managed Kubernetes clusters, reduced latency by 70%, cut costs by 25%, and built CI/CD systems.</p>
          </div>

          <div>
            <h3 className="font-bold text-white">Junior DevOps Engineer — Rekall Software</h3>
            <p>Built CI/CD pipelines, Kubernetes deployments, and observability systems improving uptime by 35%.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">Email: gsdontineni1998@gmail.com</p>
        <p className="text-gray-300">GitHub: github.com/GaneshSaiD</p>
        <p className="text-gray-300">LinkedIn: linkedin.com/in/ganeshsaidontineni</p>
      </section>

    </main>
  );
}