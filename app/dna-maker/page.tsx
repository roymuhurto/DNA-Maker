"use client";

import { useState } from "react";
import Left from "@/components/Left";
import Right from "@/components/right";
import HomePageButton from "@/components/HomePageButton";
import Title from "@/components/Title";
export default function DnaPage() {
  const [pair, setPair] = useState("Double");
  const [speed, setSpeed] = useState(3);
  const [size, setSize] = useState(3);
  const [dnaType, setDnaType] = useState("double");

  return (
    <div
      className="
  flex flex-col xl:flex-row
  items-center xl:items-start
  justify-center
  gap-6
  p-4 md:p-8
"
    >
      <Left pair={pair} dnaType={dnaType} size={size} speed={speed} />

      <Right
        pair={pair}
        setPair={setPair}
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
        dnaType={dnaType}
        setDnaType={setDnaType}
      />
      <HomePageButton />
    </div>
  );
}
