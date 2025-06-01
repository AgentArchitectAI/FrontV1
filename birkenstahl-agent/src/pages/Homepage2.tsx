import Header from "../components/Header";

const HomePage2 = () => {
  return (
    <div className="min-h-screen bg-[#202222] text-white">
      <Header />
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-[#c7c7c7]">
        </h1>
        <img
          src="/assets/hero-image.png"
          className="w-full max-w-4xl rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
        />
      </section>
    </div>
  );
};

export default HomePage2;
