/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-10">
      <div className="md:w-1/2 text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-44">
          Hi, I'm <br></br> <span className="text-[#553EB7]">Mithila</span>
        </h1>
        <p className="text-xl md:text-2xl my-4 text-gray-300">
          Frontend Developer & <br></br> UI/UX Designer
        </p>
        <Button className="mt-6 px-8 py-3 border-2 border-customLightPurple text-white rounded-[50px] shadow-custom-light hover:bg-purple-500 hover:text-white transition">
          Lets Chat
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        {/* Placeholder for a free 3D model */}
      </div>
    </section>
  );
}
