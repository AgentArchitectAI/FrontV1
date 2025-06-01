import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const baseURL = window.location.origin;

  const handleGoogleLogin = () => {
    const success = `${baseURL}/dashboard`;
    const failure = `${baseURL}/login`;

    window.location.href = `https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/google?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&success=${encodeURIComponent(success)}&failure=${encodeURIComponent(failure)}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202222] px-4 py-12 text-white">
      <div className="w-full max-w-md bg-[#2a2a2a] rounded-xl shadow-2xl p-8 space-y-8 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-[#c7c7c7]">
          Iniciar sesión
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 flex items-center justify-center gap-3 rounded-lg bg-white text-black hover:bg-[#e0e0e0] transition duration-300 font-medium"
        >
          <FcGoogle className="w-5 h-5" />
          Continuar con Google
        </button>

        <div className="text-sm text-center text-[#aaaaaa]">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-[#78786d] hover:underline">
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
