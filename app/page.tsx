"use client";

import { useState } from "react";
import add from "./stringCalc";

export default function Home() {
  const [str, setStr] = useState("");
  const [sum, setSum] = useState<string|number>(0);

  const handlecalc = () => {
    const addedSum = add(str);
    setSum(addedSum);
  };
  return (
    <div>
      <input onChange={(e) => setStr(e.target.value)} />
      <button onClick={handlecalc}>Calculate String</button>
      <p>Here is Result: {sum || ""}</p>
    </div>
  );
}
