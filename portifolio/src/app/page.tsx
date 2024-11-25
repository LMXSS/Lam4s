"use client"; // Para habilitar interatividade com React em modo client-side
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 shadow-md fixed w-full z-50">
        <div className="text-xl font-bold">Gabriel Lamas</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-blue-400 cursor-pointer"><a href="#about">Sobre</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#projects">Projetos</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#resume">Currículo</a></li>
          <li className="hover:text-blue-400 cursor-pointer"><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Gabriel Lamas</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Desenvolvedor especializado em C# e .NET, com experiência em microserviços e tecnologias modernas como RabbitMQ, Kafka, Redis, Kubernetes, entre outras.
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
        <div className="space-y-6 max-w-5xl mx-auto">
          <p>
            Olá! Sou Gabriel Lamas, desenvolvedor com anos de experiência em
            construção de sistemas escaláveis e manutenção de aplicações robustas.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "C#",
                ".NET",
                "Microservices",
                "RabbitMQ",
                "Kafka",
                "Redis",
                "Kubernetes (K8s)",
                "Zabbix",
                "Docker",
                "Git",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded text-center shadow"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Certificações</h3>
            <div className="bg-gray-800 rounded p-4 shadow">
              <p>Espaço para adicionar certificações no futuro.</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Recomendações</h3>
            <div className="relative w-full overflow-hidden">
              {/* Simulação de Carrossel */}
              <div className="flex space-x-4">
                {[
                  {
                    img: "/path/to/photo.jpg",
                    name: "João Silva",
                    role: "Gerente de Projetos",
                    company: "Empresa XYZ",
                    text: "Gabriel é um excelente desenvolvedor com grande atenção aos detalhes.",
                  },
                  {
                    img: "/path/to/photo2.jpg",
                    name: "Maria Souza",
                    role: "CTO",
                    company: "Tech Company",
                    text: "Trabalhar com Gabriel foi uma experiência fantástica!",
                  },
                ].map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-800 rounded shadow w-80 shrink-0"
                  >
                    <img
                      src={rec.img}
                      alt={rec.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <p className="text-lg font-semibold text-center">
                      {rec.name}
                    </p>
                    <p className="text-center text-gray-400 text-sm">
                      {rec.role} @ {rec.company}
                    </p>
                    <blockquote className="italic mt-4 text-gray-300">
                      "{rec.text}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Projeto A",
              description: "Descrição breve do projeto.",
              github: "https://github.com/seuprojeto",
              techs: ["C#", "RabbitMQ"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-600 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Currículo</h2>
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">
            Baixar em Português
          </button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded ml-4">
            Baixar em Inglês
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-8 bg-gray-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <form
          action={`mailto:GLamas.Dev@gmail.com`}
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="block mx-auto mb-4 px-4 py-2 w-full max-w-md rounded bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="block mx-auto mb-4 px-4 py-2 w-full max-w-md rounded bg-gray-800 text-white"
            required
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="block mx-auto mb-4 px-4 py-2 w-full max-w-md rounded bg-gray-800 text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
