import HomePageButton2 from "@/components/HomePageButton2";

export default function LearnMorePage() {
  return (
    <>
      <div
        className="relative z-10 flex flex-col items-center text-center 
                      px-4 md:px-6 text-black gap-5"
      >
        {/* Card */}
        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🦠🧬 Bacteria DNA: Bacteria DNA has an unusual shape unlike other
            DNA.
          </h1>

          <div className="flex justify-center mt-3">
            <img
              src="circular-dna.png"
              alt="bacteriaDna"
              className="transition-all duration-300 ease-in-out w-36 md:w-44 lg:w-40 hover:w-44 hover:cursor-zoom-in"
            />
          </div>
        </div>

        {/* Card */}
        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🧬 Single-stranded DNA: Single-stranded DNA has only 1 strand unlike
            Double-stranded DNA
          </h1>

          <div className="flex justify-center mt-3">
            <img
              src="single-dna.png"
              alt="ssDNA"
              className="w-36 transition-all duration-300 ease-in-out  md:w-44 lg:w-40 hover:w-44 hover:cursor-zoom-in"
            />
          </div>
        </div>
        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🧬 A-DNA: A-DNA is a right-handed, shorter and wider form of DNA
            that usually forms in dry conditions or
          </h1>

          <div className="flex justify-center mt-3">
            <img
              src="a-dna.png"
              alt="aDNA"
              className="w-36 transition-all duration-300 ease-in-out  md:w-44 lg:w-40 hover:w-44 hover:cursor-zoom-in"
            />
          </div>
        </div>
        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🧬 Z-DNA: Z-DNA is a rare form of DNA that twists to the left and
            has a zigzag-shaped backbone instead of the usual right-handed
            double helix.
          </h1>

          <div className="flex justify-center mt-3">
            <img
              src="z-dna.png"
              alt="zDNA"
              className="w-36 transition-all duration-300 ease-in-out  md:w-44 lg:w-40 hover:w-44 hover:cursor-zoom-in"
            />
          </div>
        </div>

        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🧬 H-DNA: H-DNA forms when 3 DNA strands twist together instead of
            2. It can form in special DNA sequences inside cells.
          </h1>

          <div className="flex justify-center mt-3">
            <img
              src="h-dna.png"
              alt="DNA"
              className="w-36 transition-all duration-300 ease-in-out  md:w-44 lg:w-40 hover:w-44 hover:cursor-zoom-in"
            />
          </div>
        </div>

        {/* Fact Card */}
        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🧬📏 Fun DNA fact: DNA from one human cell is about 2 meters long.
          </h1>
        </div>

        <div
          className="border-8 border-black bg-white rounded-2xl 
                        shadow-md shadow-gray-600 
                        w-full max-w-xl lg:max-w-lg p-4"
        >
          <h1 className="text-sm md:text-base lg:text-sm font-semibold">
            🍌🧑 Banana fact: share about 60% of your DNA with a banana.
          </h1>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <HomePageButton2 />
      </div>
    </>
  );
}
