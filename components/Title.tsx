import { div } from "framer-motion/client";

export default function Title() {
  return (
    <div>
      <div
        className="relative z-10 flex max-h-screen flex-col items-center 
             [perspective:1000px] justify-center text-center px-6 my-20"
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-wide
               p-8 rounded-xl 
               shadow-md shadow-black
               transition-transform duration-300
               hover:[transform:rotateX(12deg)_rotateY(12deg)]"
        >
          🧬DNA🧬
          <p className="text-red-600">🧪MAKER🧪</p>
        </h1>

        <p className=" max-w-2xl text-2xl font-medium text-slate-400 p-8 pt-8 leading-7 ">
          create, visualize, and experiment with custom sequences in an
          interactive way.
        </p>
      </div>
    </div>
  );
}
