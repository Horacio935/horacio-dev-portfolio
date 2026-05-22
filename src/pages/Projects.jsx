import { Link } from "react-router-dom";
const projects = [
  /* CyberDetective */
  {
    id: "cyberdetective",
    title: "CyberDetective",
    description:
      "Educational cybersecurity game developed in Unity to teach phishing, ransomware and DDoS attacks through interactive minigames.",
    image: "/src/assets/CyberDetective.png",
    tags: ["Unity", "C#", "Cybersecurity"],
    source: "https://github.com/Horacio935/CyberDetective.git",
  },
  /* HyperToys */
  {
    id: "hypertoys",
    title: "HyperToys",
    description:
      "E-commerce platform focused on anime collectibles using React, Express, Oracle Database and JWT authentication.",
    image: "/src/assets/HyperToys.jpeg",
    tags: ["React", "Node.js", "Oracle", "JWT", "Stripe"],
    source: "https://github.com/Joliva07/HyperToys.git",
  },

  /* Traductor lenguaje de señas */
  {
    id: "translator",
    title: "AI Sign Language Translator",
    description:
      "Real-time translator capable of converting sign language into text using Machine Learning and Computer Vision.",
    image: "/src/assets/traductor.png",
    tags: ["Python", "AI", "Computer Vision"],
    source: "https://github.com/jyocj46/traductor_se.git",
  },
  
  /* NUEVO PROYECTO */
  {
  id: "receipt",
  title:"Payment Receipt Automation",
  description:
    "Automated system developed with Python and Streamlit to generate employee payment receipts from Excel files and export them as PDFs for a security company.",
  image:"/src/assets/comprobante.png",
  tags:["Python","Streamlit","Excel","PDF"],
  source:"https://github.com/Horacio935/Automatizaci-n-de-comprobantes.git",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-10">
          <h1 className="text-5xl font-bold">PROJECTS</h1>
          <span className="bg-slate-700 text-white text-sm px-2 py-1 rounded-md">
            {projects.length}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-red-500 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 text-xs px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.source}
                    className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;