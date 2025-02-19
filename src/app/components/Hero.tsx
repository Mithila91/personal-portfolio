"use client"
import Button from "./Button";
import dynamic from "next/dynamic";

// Import Scene with loading state
const Scene = dynamic(() => import("./Scene"), { 
  ssr: false,
  loading: () => <div className="text-white text-center">Loading 3D Scene...</div>
});

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-center px-10">
      <div className="md:w-1/2 text-left z-10 mt-10 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 md:mb-44">
          Hi, I&apos;m <br /> <span className="text-[#553EB7]">Mithila</span>
        </h1>
        <p className="text-xl md:text-2xl my-4 text-gray-300">
          Frontend Developer & <br /> UI/UX Designer
        </p>
        <Button className="mt-6 px-8 py-3 border-2 border-customLightPurple text-white rounded-[50px] shadow-custom-light hover:bg-purple-500 hover:text-white transition">
          Lets Chat
        </Button>
      </div>
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] z-0">
        <Scene />
      </div>
    </section>
  );
}
