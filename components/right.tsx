"use client";

type Props = {
  pair: string;
  setPair: (v: string) => void;

  speed: number;
  setSpeed: (v: number) => void;

  size: number;
  setSize: (v: number) => void;

  dnaType: string;
  setDnaType: (v: string) => void;
};

export default function Right({
  pair,
  setPair,
  speed,
  setSpeed,
  size,
  setSize,
  dnaType,
  setDnaType,
}: Props) {
  const CheckBox = ({ value, label }: { value: string; label: string }) => (
    <button
      onClick={() => setDnaType(value)}
      className="flex items-center justify-between w-full mb-3"
    >
      <span className="text-lg">{label}</span>

      <div className="w-7 h-7 border-2 border-black rounded-md bg-transparent flex items-center justify-center">
        {dnaType === value && (
          <span className="text-black font-bold text-lg">✓</span>
        )}
      </div>
    </button>
  );

  return (
    <div
      className=" w-full max-w-xs
  xl:w-72
  min-h-[420px]
  px-6 py-8
  rounded-3xl min-h-screen px-6 py-8 text-white bg-gradient-to-b from-blue-900 border-4 border-black  opacity-85"
    >
      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-10">
        EDITING
        <br />
        PANEL
      </h2>

      {/* Type */}
      <div className="mb-8">
        <label className="block text-sm mb-2 opacity-90">TYPE</label>
        <select
          value={pair}
          onChange={(e) => setPair(e.target.value)}
          className="w-full text-black px-2 py-1 rounded bg-white"
        >
          <option value="Double">Double stranded</option>
          <option value="Single">Single stranded</option>
          <option value="Circular">Circular</option>
          <option value="Z">Z DNA</option>
          <option value="A">A DNA</option>
          <option value="H">H DNA</option>
        </select>
      </div>

      {/* SPEED */}
      <div className="mb-8">
        <label className="block text-sm mb-2 opacity-90">SPEED</label>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full text-black px-2 py-1 rounded bg-white"
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      {/* SIZE */}
      <div>
        <label className="block text-sm mb-2 opacity-90">SIZE</label>
        <select
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full text-black px-2 py-1 rounded bg-white"
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
