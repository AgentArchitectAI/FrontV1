import { FcGoogle } from "react-icons/fc";
import { loginWithGoogle } from "../lib/auth";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202222] px-4 py-12 text-white">
      <div className="w-full max-w-md bg-[#2a2a2a] rounded-xl shadow-2xl p-8 space-y-8 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-[#c7c7c7]">
          Crear cuenta
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#78786d]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#78786d]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-lg bg-[#1d1d1d] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#78786d]"
          />
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-[#78786d] hover:bg-[#5e5e5e] text-white font-semibold transition duration-300"
          >
            Registrarse
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
          <span>o continúa con</span>
        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full py-3 px-4 flex items-center justify-center gap-3 rounded-lg bg-white text-black hover:bg-[#e0e0e0] transition duration-300 font-medium"
        >
          <FcGoogle className="w-5 h-5" />
          Continuar con Google
        </button>

      

        <div className="text-sm text-center text-[#aaaaaa]">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-[#78786d] hover:underline">
            Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
