import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    VANTA: any;
    p5: any;
  }
}

const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = window.VANTA.TOPOLOGY({
      el: vantaRef.current,
      p5: window.p5,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x78786d,
      backgroundColor: 0x202222,
    });

    return () => {
      if (effect && effect.destroy) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 text-white"
    >
      <div className="w-full max-w-4xl space-y-10 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#c7c7c7] drop-shadow-md transition-all duration-300 hover:tracking-wide">
          Birkenstahl <br />
          <span className="text-[#78786d]">Intelligent Agent</span>
        </h1>

        <div className="flex justify-center sm:justify-start">
          <Link to="/homepage2">
            <button
              className="bg-[#78786d] hover:bg-[#5e5e5e] active:scale-95 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
Beginnen Sie mit dem Agenten
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
