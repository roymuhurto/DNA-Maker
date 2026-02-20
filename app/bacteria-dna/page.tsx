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
              className="w-36 md:w-44 lg:w-40"
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
              className="w-36 md:w-44 lg:w-40"
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
      </div>

      <div className="mt-6 flex justify-center">
        <HomePageButton2 />
      </div>
    </>
  );
}
