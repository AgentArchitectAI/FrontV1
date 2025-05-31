import React from "react";
import Header2 from "../components/Header2";
import { HardHat, PencilRuler, LayoutTemplate } from "lucide-react";

const agents = [
  {
    name: "Agent Arquitecto",
    description:
      "Utiliza herramientas como AutoCAD para generar planos arquitectónicos detallados a partir de instrucciones escritas.",
    icon: <PencilRuler className="text-[#78786d]" size={28} />,
  },
  {
    name: "Agent Constructor",
    description:
      "Planifica y gestiona cronogramas de obra, costos y recursos utilizando modelos BIM y software de construcción.",
    icon: <HardHat className="text-[#78786d]" size={28} />,
  },
  {
    name: "Agent Diseñador UX/UI",
    description:
      "Genera wireframes y prototipos en Figma con base en requisitos del usuario y principios de diseño accesible.",
    icon: <LayoutTemplate className="text-[#78786d]" size={28} />,
  },
];

const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-[#202222] text-white">
      <Header2 />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{agent.icon}</div>
              <h2 className="text-xl font-semibold text-[#c7c7c7] mb-2">
                {agent.name}
              </h2>
              <p className="text-[#aaaaaa] text-sm leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AgentsPage;
