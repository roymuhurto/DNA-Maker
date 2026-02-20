import HomeButton from "@/components/HomeButton";

import Title from "@/components/Title";

export default function HomePage() {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <Title />

        <HomeButton />
      </div>
    </>
  );
}
