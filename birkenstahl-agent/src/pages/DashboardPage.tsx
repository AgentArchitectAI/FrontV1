import React from "react";
import Header2 from "../components/Header2";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#202222] text-white">
      <Header2 />

      <main className="p-6 sm:p-10">
       

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#c7c7c7]">Tus Tareas</h3>
            <p className="text-sm text-[#aaaaaa]">Accede a tus misiones pendientes y tareas asignadas.</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#c7c7c7]">Análisis</h3>
            <p className="text-sm text-[#aaaaaa]">Revisa el comportamiento de tu agente y estadísticas clave.</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#c7c7c7]">Configuración</h3>
            <p className="text-sm text-[#aaaaaa]">Personaliza tu perfil y la configuración del sistema.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
