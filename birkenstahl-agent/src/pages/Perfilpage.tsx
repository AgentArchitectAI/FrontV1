import React from "react";
import Header2 from "../components/Header2";



const PerfilPage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#202222] overflow-x-hidden text-white"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header2 />

      <div className="layout-container flex h-full grow flex-col">
        <section className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex items-center gap-6 p-4 flex-wrap">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#78786d]">
                <img
                  src="/assets/avatar-placeholder.png"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#c7c7c7] text-3xl font-bold">Usuario</p>
                <p className="text-[#aaaaaa] text-sm">correo@example.com</p>
                <p className="text-[#888888] text-xs mt-1">Rol: Básico</p>
              </div>
            </div>

            <h2 className="text-[#c7c7c7] text-xl font-bold px-4 pt-8 pb-3">Configuración de cuenta</h2>
            <div className="max-w-[480px] px-4 py-3 space-y-4">
              <div>
                <label className="block pb-2 text-[#aaaaaa]">Cambiar contraseña</label>
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  className="w-full h-12 rounded-xl px-4 bg-[#2a2a2a] border border-[#3e3e3e] text-white focus:outline-none focus:ring-2 focus:ring-[#78786d]"
                />
              </div>
              <div>
                <label className="block pb-2 text-[#aaaaaa]">Cambiar email</label>
                <input
                  type="email"
                  placeholder="nuevo@email.com"
                  className="w-full h-12 rounded-xl px-4 bg-[#2a2a2a] border border-[#3e3e3e] text-white focus:outline-none focus:ring-2 focus:ring-[#78786d]"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-[#3a3a3a] text-sm">Conectar Google</button>
                <button className="px-4 py-2 rounded-lg bg-[#3a3a3a] text-sm">Conectar GitHub</button>
              </div>
            </div>

            <h2 className="text-[#c7c7c7] text-xl font-bold px-4 pt-8 pb-3">Preferencias</h2>
            <div className="max-w-[480px] px-4 py-3 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#aaaaaa]">Tema oscuro</span>
                <input type="checkbox" className="accent-[#78786d]" defaultChecked />
              </div>
              <div>
                <label className="block pb-2 text-[#aaaaaa]">Idioma</label>
                <select className="w-full h-12 rounded-xl px-4 bg-[#2a2a2a] border border-[#3e3e3e] text-white">
                  <option>Español</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#78786d]" />
                  <span>Accesibilidad: Fuente grande</span>
                </label>
              </div>
            </div>

            <h2 className="text-[#c7c7c7] text-xl font-bold px-4 pt-8 pb-3">Integraciones</h2>
            <div className="max-w-[480px] px-4 py-3 space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-[#78786d]" />
                <span>GitHub</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-[#78786d]" />
                <span>Figma</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-[#78786d]" />
                <span>AutoCAD</span>
              </label>
            </div>

            <h2 className="text-[#c7c7c7] text-xl font-bold px-4 pt-8 pb-3">Acciones</h2>
            <div className="max-w-[480px] px-4 py-3 space-y-3">
              <button className="w-full text-left text-[#e06666] hover:underline">Cerrar sesión</button>
              <button className="w-full text-left text-[#e06666] hover:underline">Eliminar cuenta</button>
              <button className="w-full text-left text-[#aaaaaa] hover:underline">Descargar mis datos</button>
            </div>

            
          </div>
        </section>
      </div>
    </div>
  );
};

export default PerfilPage;

