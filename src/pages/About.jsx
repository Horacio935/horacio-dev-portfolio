import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* PORTADA */}
      <div className="h-64 bg-gradient-to-r from-red-900 via-black to-blue-900">
      </div>

      {/* CONTENIDO */}
      <div className="max-w-5xl mx-auto px-6">

        {/* FOTO + INFO */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 -mt-24">

          {/* FOTO */}
          <img
            src="src/assets/Foto.jpeg"
            alt="perfil"
            className="w-48 h-48 relative -top-24 rounded-full border-4 border-black object-cover object-top"
          />

          {/* TEXTO */}
          <div className="text-center md:text-left">

            <h1 className="text-5xl font-bold">
              Horacio Lopez
            </h1>

            <p className="text-purple-400 text-xl mt-2">
              Software Engineer Jr / Cybersecurity Enthusiast / Game Developer Enthusiast
            </p>

            <div className="flex items-center gap-2 text-gray-400 mt-4">
              <FaMapMarkerAlt />
              <span>San Lucas Sacatepéquez, Guatemala</span>
            </div>
            
            <p className="text-gray-300 mt-4 max-w-2xl">
              I am a Systems Engineering student with a strong interest in software development, artificial intelligence, and 
              cybersecurity. I enjoy building practical solutions that combine programming, problem solving, and real-world 
              applications. I have completed my undergraduate coursework in Systems Engineering at the Mariano Gálvez University 
              of Guatemala and I am currently pursuing a Master's degree in Cybersecurity.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="mailto:lopezjosecbsl@gmail.com"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                CONTACT ME
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                VIEW RESUME
              </a>

            </div>

            {/* ICONOS */}
            <div className="flex justify-center md:justify-start gap-5 text-3xl mt-6">
              
              {/* GitHub */}
              <a 
                href="https://github.com/Horacio935"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-purple-400 transition"/>
              </a>

              {/* Linkedin */}
              <a 
                href="https://www.linkedin.com/in/horacio-lopez-7665aa365/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400 transition"/>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/50241761471"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-green-400 transition"/>
              </a>

            </div>

          </div>

        </div>

      {/* ABOUT ME */}

      <div className="mt-16">
      <h2 className="text-4xl font-bold mb-8">
      About Me
      </h2>
      <p className="text-gray-300 text-lg leading-9">
      Hello! I'm <span className="text-red-400">
      Horacio Lopez
      </span>, a Systems Engineering student focused on backend development, cybersecurity, and intelligent applications.
      I enjoy building software that solves real-world problems, from educational cybersecurity games to AI-powered tools and scalable web applications.
      Currently, I am pursuing a Master's degree in Cybersecurity while strengthening my skills in backend development, APIs, databases, and software architecture.
      My long-term goal is to become a Backend Engineer capable of designing secure, scalable, and impactful systems.
      </p>
      </div>

      {/* Featured Projects */}
      <div className="mt-16">
      <h2 className="text-4xl font-bold mb-10">
      Featured Projects
      </h2>

      {/* CyberDetective */}
      <div className="space-y-10">
      <div>
      <h3 className="text-2xl font-semibold text-red-400">
      CyberDetective
      </h3>
      <p className="text-gray-300">
      Educational cybersecurity game developed in Unity designed to teach phishing, ransomware and DDoS attacks through interactive minigames.
      </p>
      </div>
      
      {/* HyperToys */}
      <div>
      <h3 className="text-2xl font-semibold text-red-400">
      HyperToys
      </h3>
      <p className="text-gray-300">
      E-commerce platform focused on anime collectibles using React, Express, Oracle Database and JWT authentication.
      </p>
      </div>

      {/* AT Sign Language Translator */}
      <div>
      <h3 className="text-2xl font-semibold text-red-400">
      AI Sign Language Translator
      </h3>
      <p className="text-gray-300">
      Real-time translator capable of converting sign language into text using Machine Learning and Computer Vision.
      </p>
      </div>
      </div>
      </div>

      {/* Professional Experience */}
      <div className="mt-16">
      <h2 className="text-4xl font-bold mb-8">
      Professional Experience
      </h2>
      <ul className="space-y-5 text-gray-300">
      <li>
      • +1 years in customer service and technical support in international call centers.
      </li>
      <li>
      • Experience communicating professionally in English.
      </li>
      <li>
      • Problem solving under pressure.
      </li>
      <li>
      • Customer support, sales and troubleshooting.
      </li> 
      </ul>
      </div>

      {/* Education */}
      <div className="mt-16">
      <h2 className="text-4xl font-bold mb-8">
      Education
      </h2>
      <ul className="space-y-4 text-gray-300">
      <li>
      Completed Coursework in Systems Engineering — Mariano Gálvez University of Guatemala
      </li>
      <li>
      Master's Degree in Cybersecurity (Currently studying)
      </li>
      </ul>
      </div>

      {/* Final Phrase */}
      <div className="mt-16 mb-20">
      <h2 className="text-4xl font-bold mb-8">
      Let's Build Something Great
      </h2>
      <p className="text-gray-300 text-lg">
      Technology changes constantly, but curiosity, persistence and continuous learning remain timeless.
      I believe every project is an opportunity to improve people's lives through software.
      </p>
      </div>

      </div>

    </div>
  );
}

export default App;