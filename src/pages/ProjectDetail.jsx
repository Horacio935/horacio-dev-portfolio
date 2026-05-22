import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const projects = {
  cyberdetective: {
    title: "CyberDetective",
    description:
      "CyberDetective is an educational video game developed in Unity that aims to teach basic cybersecurity concepts through interactive learning. The project integrates three main minigames focused on real-world threats: Phishing, where the user identifies legitimate and fraudulent emails; DDoS, where they protect servers against massive attacks using arcade mechanics; and Ransomware, where they must analyze logs and isolate compromised computers to contain infections within a simulated network. The system incorporates Firebase Firestore storage to save progress, scores, and pre/post-learning surveys, allowing for the measurement of the game's educational impact. It also includes dynamic tutorials and an event-driven architecture to manage player states. The project was conceived as a graduation project focused on technology education and cybersecurity awareness.",
    technologies: ["Unity", "C#", "Firebase", "Cybersecurity"],
    purpose:
      "This project was developed as a graduation project to help students learn cybersecurity concepts in a practical and interactive way.",
    images: ["/cyber1.png", "/cyber2.png", "/cyber3.png", "/cyber4.png"],
    source: "https://github.com/Horacio935/CyberDetective",
  },

  hypertoys: {
    title: "HyperToys",
    description:
      "HyperToys is an online store focused on selling collectible figures, anime products, and geek culture items. The project was developed using a client-server architecture with React for the frontend and Node.js/Express for the backend, connected to an Oracle database. It implements authentication using credentials stored in the CLIENTS table, protected paths, session management, and user management. The platform includes typical e-commerce functionalities such as a product catalog, detailed product display, login, and persistent data management. The system's objective is to simulate a real-world e-commerce environment by applying concepts of software engineering, web design, REST APIs, and secure user management.",
    technologies: ["React", "Node.js", "Oracle", "JWT", "Stripe"],
    purpose:
      "This project was part of the Final Project for the Software Engineering course at the university",
    images: ["/hyper1.jpeg", "/hyper2.jpeg", "/hyper3.jpeg", "/hyper4.jpeg"],
    source: "https://github.com/Joliva07/HyperToys.git",
  },

  translator: {
    title: "AI Sign Language Translator",
    description:
      "This project consists of an intelligent system capable of recognizing sign language using computer vision and converting it to text or speech in real time. It uses MediaPipe to detect key points on the hands, TensorFlow Lite (.tflite) to run optimized machine learning models, and PostgreSQL to store valid words and data related to previously recorded signs. The system can recognize one- or two-handed sign configurations, progressively construct words, and play audio when it detects valid terms. The main objective is to reduce communication barriers for people with hearing impairments through applied artificial intelligence.",
    technologies: ["Python", "AI", "Computer Vision", "TensorFlow", "MediaPipe"],
    purpose:
      "This project was part of the Final Project for the Artificial Inteligence I course at the university",
    images: ["/translator1.png", "/translator2.png", "/translator3.png", "/translator4.png"],
    source: "https://github.com/jyocj46/traductor_se",
  },

  receipt: {
    title: "Payment Receipt Automation",
    description:
      "This project is a tool developed to automate the creation of pay stubs and payroll receipts from Excel files, significantly reducing the time required for manual document preparation. Built with Python and Streamlit, it allows users to upload spreadsheets, process employee data, calculate income and deductions, and generate professionally formatted receipts. The system is adaptable to handle various Excel file structures, multiple industry sectors, and variable items such as bonuses or additional income. It also includes document export and enhancements geared toward enterprise use. The project's objective is to optimize repetitive administrative processes and reduce human error in receipt generation.",
    technologies: ["Python", "Streamlit", "Excel", "PDF"],
    purpose:
      "This project was designed solely for the operation of the company called Protector S.A.",
    images: ["/receipt1.png", "/receipt2.png", "/receipt3.png", "/receipt4.png"],
    source: "https://github.com/Horacio935/Automatizaci-n-de-comprobantes",
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Project not found</h1>
        <Link to="/projects" className="text-red-400">
          Back to Projects
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      currentImage === 0 ? project.images.length - 1 : currentImage - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <Link to="/projects" className="text-red-400 hover:underline">
          ← Back to Projects
        </Link>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          {project.title}
        </h1>

        <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-[420px] object-contain"
          />

          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 px-4 py-2 rounded-full"
          >
            ←
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 px-4 py-2 rounded-full"
          >
            →
          </button>
        </div>

        <p className="text-gray-300 text-lg leading-8 mt-8">
          {project.description}
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-800 px-4 py-2 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          Purpose
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          {project.purpose}
        </p>

        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
        >
          Source Code
        </a>

      </div>
    </div>
  );
}

export default ProjectDetail;